"use client";

import { ethers } from "ethers";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EncryptedSponsorDealABI } from "@/abi/EncryptedSponsorDealABI";
import { EncryptedSponsorDealAddresses } from "@/abi/EncryptedSponsorDealAddresses";

type DealMeta = {
  dealId: number;
  sponsor: string;
  creator: string;
  title: string;
  description: string;
  active: boolean;
};

type ContractInfo = {
  abi: typeof EncryptedSponsorDealABI.abi;
  address?: `0x${string}`;
  chainId?: number;
  chainName?: string;
};

function getContractByChainId(chainId: number | undefined): ContractInfo {
  if (!chainId) {
    return { abi: EncryptedSponsorDealABI.abi };
  }

  const entry =
    EncryptedSponsorDealAddresses[
      chainId.toString() as keyof typeof EncryptedSponsorDealAddresses
    ];

  if (!("address" in entry) || entry.address === ethers.ZeroAddress) {
    return { abi: EncryptedSponsorDealABI.abi, chainId };
  }

  return {
    address: entry?.address as `0x${string}` | undefined,
    chainId: entry?.chainId ?? chainId,
    chainName: entry?.chainName,
    abi: EncryptedSponsorDealABI.abi,
  };
}

export const useAllDeals = (parameters: {
  chainId: number | undefined;
  ethersReadonlyProvider: ethers.ContractRunner | undefined;
}) => {
  const { chainId, ethersReadonlyProvider } = parameters;

  const [deals, setDeals] = useState<DealMeta[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const isLoadingRef = useRef<boolean>(false);

  const contract = useMemo(() => {
    return getContractByChainId(chainId);
  }, [chainId]);

  const isDeployed = useMemo(() => {
    if (!contract) {
      return undefined;
    }
    return Boolean(contract.address) && contract.address !== ethers.ZeroAddress;
  }, [contract]);

  const loadAllDeals = useCallback(async () => {
    if (isLoadingRef.current) {
      return;
    }

    if (!contract.address || !ethersReadonlyProvider) {
      setDeals([]);
      return;
    }

    isLoadingRef.current = true;
    setIsLoading(true);
    setError(undefined);

    try {
      const contractInstance = new ethers.Contract(
        contract.address,
        contract.abi,
        ethersReadonlyProvider
      );

      // Get total deal count
      const dealCount = await contractInstance.getDealCount();
      const count = Number(dealCount);

      console.log(`[useAllDeals] Total deals: ${count}`);

      if (count === 0) {
        setDeals([]);
        return;
      }

      // Load all deals in parallel with batch processing for performance
      const dealPromises: Promise<DealMeta>[] = [];
      const batchSize = 10; // Process deals in batches to avoid overwhelming the network
      
      for (let i = 1; i <= count; i++) {
        dealPromises.push(
          contractInstance.getDealMeta(i).then((meta: any) => ({
            dealId: i,
            sponsor: meta[0],
            creator: meta[1],
            title: meta[2],
            description: meta[3],
            active: meta[4],
          }))
        );
        
        // Process in batches to prevent rate limiting
        if (i % batchSize === 0 || i === count) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      const allDeals = await Promise.all(dealPromises);
      
      // Filter out empty deals (zero address sponsor)
      const validDeals = allDeals.filter(
        (deal) => deal.sponsor !== ethers.ZeroAddress
      );

      console.log(`[useAllDeals] Loaded ${validDeals.length} valid deals`);
      setDeals(validDeals);
    } catch (e) {
      console.error("[useAllDeals] Error loading deals:", e);
      setError((e as Error).message);
      setDeals([]);
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
    }
  }, [contract.address, contract.abi, ethersReadonlyProvider]);

  // Auto-load on mount and when dependencies change
  useEffect(() => {
    loadAllDeals();
  }, [loadAllDeals]);

  return {
    deals,
    isLoading,
    error,
    isDeployed,
    contractAddress: contract.address,
    reload: loadAllDeals,
  };
};
