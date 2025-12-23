"use client";

import { ethers } from "ethers";
import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { FhevmInstance } from "@/fhevm/fhevmTypes";
import { FhevmDecryptionSignature } from "@/fhevm/FhevmDecryptionSignature";
import { GenericStringStorage } from "@/fhevm/GenericStringStorage";

import { EncryptedSponsorDealABI } from "@/abi/EncryptedSponsorDealABI";
import { EncryptedSponsorDealAddresses } from "@/abi/EncryptedSponsorDealAddresses";

type DealMeta = {
  sponsor: string;
  creator: string;
  title: string;
  description: string;
  active: boolean;
};

type EncryptedSponsorDealInfo = {
  abi: typeof EncryptedSponsorDealABI.abi;
  address?: `0x${string}`;
  chainId?: number;
  chainName?: string;
};

function getEncryptedSponsorDealByChainId(
  chainId: number | undefined
): EncryptedSponsorDealInfo {
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

export const useEncryptedSponsorDeal = (parameters: {
  instance: FhevmInstance | undefined;
  fhevmDecryptionSignatureStorage: GenericStringStorage;
  eip1193Provider: ethers.Eip1193Provider | undefined;
  chainId: number | undefined;
  ethersSigner: ethers.JsonRpcSigner | undefined;
  ethersReadonlyProvider: ethers.ContractRunner | undefined;
  sameChain: RefObject<(chainId: number | undefined) => boolean>;
  sameSigner: RefObject<
    (ethersSigner: ethers.JsonRpcSigner | undefined) => boolean
  >;
  dealId: number;
}) => {
  const {
    instance,
    fhevmDecryptionSignatureStorage,
    chainId,
    ethersSigner,
    ethersReadonlyProvider,
    sameChain,
    sameSigner,
    dealId,
  } = parameters;

  const [meta, setMeta] = useState<DealMeta | undefined>(undefined);
  const [budgetHandle, setBudgetHandle] = useState<string | undefined>(
    undefined
  );
  const [clearBudget, setClearBudget] = useState<bigint | undefined>(undefined);
  const clearBudgetRef = useRef<bigint | undefined>(undefined);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isDecrypting, setIsDecrypting] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const contractRef = useRef<EncryptedSponsorDealInfo | undefined>(undefined);
  const isRefreshingRef = useRef<boolean>(isRefreshing);
  const isDecryptingRef = useRef<boolean>(isDecrypting);
  const isCreatingRef = useRef<boolean>(isCreating);

  const isDecrypted = budgetHandle && clearBudget !== undefined;

  const contract = useMemo(() => {
    const c = getEncryptedSponsorDealByChainId(chainId);
    contractRef.current = c;
    if (!c.address) {
      setMessage(
        `EncryptedSponsorDeal deployment not found for chainId=${chainId}.`
      );
    }
    return c;
  }, [chainId]);

  const isDeployed = useMemo(() => {
    if (!contract) {
      return undefined;
    }
    return Boolean(contract.address) && contract.address !== ethers.ZeroAddress;
  }, [contract]);

  const canRefresh = useMemo(() => {
    return contract.address && ethersReadonlyProvider && !isRefreshing;
  }, [contract.address, ethersReadonlyProvider, isRefreshing]);

  const refreshDeal = useCallback(() => {
    console.log("[useEncryptedSponsorDeal] call refreshDeal()");
    if (isRefreshingRef.current) {
      return;
    }

    if (
      !contractRef.current ||
      !contractRef.current?.chainId ||
      !contractRef.current?.address ||
      !ethersReadonlyProvider
    ) {
      setMeta(undefined);
      setBudgetHandle(undefined);
      return;
    }

    isRefreshingRef.current = true;
    setIsRefreshing(true);

    const thisChainId = contractRef.current.chainId;
    const thisContractAddress = contractRef.current.address;

    const thisContract = new ethers.Contract(
      thisContractAddress,
      contractRef.current.abi,
      ethersReadonlyProvider
    );

    Promise.all([
      thisContract.getDealMeta(dealId),
      thisContract.getEncryptedBudget(dealId),
    ])
      .then(([metaResult, budgetResult]) => {
        console.log("[useEncryptedSponsorDeal] Contract interaction successful");
        console.log("[useEncryptedSponsorDeal] Chain ID:", thisChainId);
        console.log("[useEncryptedSponsorDeal] Contract address:", thisContractAddress);
        console.log("[useEncryptedSponsorDeal] Deal ID:", dealId);
        console.log("[useEncryptedSponsorDeal] getDealMeta()=", metaResult);
        console.log(
          "[useEncryptedSponsorDeal] getEncryptedBudget()=",
          budgetResult
        );

        if (
          sameChain.current(thisChainId) &&
          thisContractAddress === contractRef.current?.address
        ) {
          setMeta({
            sponsor: metaResult[0],
            creator: metaResult[1],
            title: metaResult[2],
            description: metaResult[3],
            active: metaResult[4],
          });
          setBudgetHandle(budgetResult);
        }

        isRefreshingRef.current = false;
        setIsRefreshing(false);
      })
      .catch((e) => {
        setMessage(
          "EncryptedSponsorDeal.getDealMeta() or getEncryptedBudget() call failed! error=" +
            e
        );

        isRefreshingRef.current = false;
        setIsRefreshing(false);
      });
  }, [ethersReadonlyProvider, sameChain, dealId]);

  // Auto refresh the deal
  useEffect(() => {
    refreshDeal();
  }, [refreshDeal]);

  const canDecrypt = useMemo(() => {
    return (
      contract.address &&
      instance &&
      ethersSigner &&
      !isRefreshing &&
      !isDecrypting &&
      budgetHandle &&
      budgetHandle !== ethers.ZeroHash &&
      clearBudget === undefined
    );
  }, [
    contract.address,
    instance,
    ethersSigner,
    isRefreshing,
    isDecrypting,
    budgetHandle,
    clearBudget,
  ]);

  const decryptBudget = useCallback(() => {
    if (isRefreshingRef.current || isDecryptingRef.current) {
      return;
    }

    if (!contract.address || !instance || !ethersSigner) {
      return;
    }

    if (!budgetHandle) {
      setClearBudget(undefined);
      clearBudgetRef.current = undefined;
      return;
    }

    if (budgetHandle === ethers.ZeroHash) {
      setClearBudget(BigInt(0));
      clearBudgetRef.current = BigInt(0);
      return;
    }

    const thisChainId = chainId;
    const thisContractAddress = contract.address;
    const thisBudgetHandle = budgetHandle;
    const thisEthersSigner = ethersSigner;

    isDecryptingRef.current = true;
    setIsDecrypting(true);
    setMessage("Start decrypt budget");

    const run = async () => {
      const isStale = () =>
        thisContractAddress !== contractRef.current?.address ||
        !sameChain.current(thisChainId) ||
        !sameSigner.current(thisEthersSigner);

      try {
        const sig: FhevmDecryptionSignature | null =
          await FhevmDecryptionSignature.loadOrSign(
            instance,
            [contract.address as `0x${string}`],
            ethersSigner,
            fhevmDecryptionSignatureStorage
          );

        if (!sig) {
          setMessage("Unable to build FHEVM decryption signature");
          return;
        }

        if (isStale()) {
          setMessage("Ignore FHEVM decryption");
          return;
        }

        setMessage("Call FHEVM userDecrypt...");

        const res = await instance.userDecrypt(
          [
            {
              handle: thisBudgetHandle,
              contractAddress: thisContractAddress,
            },
          ],
          sig.privateKey,
          sig.publicKey,
          sig.signature,
          sig.contractAddresses,
          sig.userAddress,
          sig.startTimestamp,
          sig.durationDays
        );

        setMessage("FHEVM userDecrypt completed!");

        if (isStale()) {
          setMessage("Ignore FHEVM decryption");
          return;
        }

        const decryptedBudget = BigInt(res[thisBudgetHandle]);
        setClearBudget(decryptedBudget);
        clearBudgetRef.current = decryptedBudget;

        setMessage("Budget decrypted: " + decryptedBudget.toString());
      } finally {
        isDecryptingRef.current = false;
        setIsDecrypting(false);
      }
    };

    run();
  }, [
    fhevmDecryptionSignatureStorage,
    ethersSigner,
    contract.address,
    instance,
    budgetHandle,
    chainId,
    sameChain,
    sameSigner,
  ]);

  const canCreate = useMemo(() => {
    const result = contract.address && instance && ethersSigner && !isCreating;
    console.log("[useEncryptedSponsorDeal] canCreate check:", {
      hasAddress: !!contract.address,
      hasInstance: !!instance,
      hasSigner: !!ethersSigner,
      isCreating,
      result,
    });
    return result;
  }, [contract.address, instance, ethersSigner, isCreating]);

  const createDeal = useCallback(
    async (
      creator: string,
      title: string,
      description: string,
      budget: number
    ) => {
      if (isCreatingRef.current) {
        throw new Error("Already creating a deal");
      }

      if (!contract.address || !instance || !ethersSigner) {
        throw new Error("Contract, FHEVM instance, or signer not available");
      }

      isCreatingRef.current = true;
      setIsCreating(true);
      setMessage("Encrypting budget...");

      try {
        // Encrypt budget
        const input = instance.createEncryptedInput(
          contract.address,
          await ethersSigner.getAddress()
        );
        input.add32(budget);
        const encryptedBudget = await input.encrypt();

        setMessage("Creating deal transaction...");

        // Create contract instance
        const contractInstance = new ethers.Contract(
          contract.address,
          contract.abi,
          ethersSigner
        );

        // Send transaction
        const tx = await contractInstance.createDeal(
          creator,
          title,
          description,
          encryptedBudget.handles[0],
          encryptedBudget.inputProof
        );

        setMessage("Waiting for confirmation...");
        await tx.wait();

        setMessage("Deal created successfully!");

        // Refresh to load new deal
        setTimeout(() => refreshDeal(), 1000);
      } finally {
        isCreatingRef.current = false;
        setIsCreating(false);
      }
    },
    [contract.address, contract.abi, instance, ethersSigner, refreshDeal]
  );

  return {
    contractAddress: contract.address,
    canDecrypt,
    canRefresh,
    canCreate,
    decryptBudget,
    refreshDeal,
    createDeal,
    isDecrypted,
    message,
    meta,
    clearBudget,
    budgetHandle,
    isDecrypting,
    isRefreshing,
    isCreating,
    isDeployed,
  };
};
