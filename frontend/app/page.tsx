"use client";

import { Shield, Lock, Users } from "lucide-react";
import SponsorshipCard from "@/components/SponsorshipCard";
import { CreateDealButton } from "@/components/CreateDealButton";
import { useFhevm } from "@/fhevm/useFhevm";
import { useInMemoryStorage } from "@/hooks/useInMemoryStorage";
import { useMetaMaskEthersSigner } from "@/hooks/metamask/useMetaMaskEthersSigner";
import { useEncryptedSponsorDeal } from "@/hooks/useEncryptedSponsorDeal";
import { useAllDeals } from "@/hooks/useAllDeals";
import { FhevmInstance } from "@/fhevm/fhevmTypes";
import { GenericStringStorage } from "@/fhevm/GenericStringStorage";
import { ethers } from "ethers";
import { RefObject } from "react";

// Individual deal card component that manages its own decrypt state
function DealCard({
  dealMeta,
  fhevmInstance,
  fhevmDecryptionSignatureStorage,
  provider,
  chainId,
  ethersSigner,
  ethersReadonlyProvider,
  sameChain,
  sameSigner,
}: {
  dealMeta: {
    dealId: number;
    sponsor: string;
    creator: string;
    title: string;
    description: string;
    active: boolean;
  };
  fhevmInstance: FhevmInstance | undefined;
  fhevmDecryptionSignatureStorage: GenericStringStorage;
  provider: ethers.Eip1193Provider | undefined;
  chainId: number | undefined;
  ethersSigner: ethers.JsonRpcSigner | undefined;
  ethersReadonlyProvider: ethers.ContractRunner | undefined;
  sameChain: RefObject<(chainId: number | undefined) => boolean>;
  sameSigner: RefObject<
    (ethersSigner: ethers.JsonRpcSigner | undefined) => boolean
  >;
}) {
  const dealData = useEncryptedSponsorDeal({
    instance: fhevmInstance,
    fhevmDecryptionSignatureStorage,
    eip1193Provider: provider,
    chainId,
    ethersSigner,
    ethersReadonlyProvider,
    sameChain,
    sameSigner,
    dealId: dealMeta.dealId,
  });

  const deal = {
    id: dealMeta.dealId.toString(),
    title: dealMeta.title || "Untitled Deal",
    sponsor: dealMeta.sponsor,
    tournament: "On-chain Encrypted Sponsorship",
    value: dealData.isDecrypted
      ? `$${dealData.clearBudget?.toString()}`
      : "Encrypted",
    duration: dealMeta.active ? "Active" : "Closed",
    terms: dealMeta.description || "No description available",
    status: (dealData.isDecrypted ? "unlocked" : "locked") as
      | "locked"
      | "unlocked",
    verifiedPartners: [dealMeta.sponsor, dealMeta.creator],
  };

  return (
    <SponsorshipCard
      deal={deal}
      onDecrypt={() => dealData.decryptBudget()}
    />
  );
}

export default function Home() {
  const { storage: fhevmDecryptionSignatureStorage } = useInMemoryStorage();
  const {
    provider,
    chainId,
    ethersSigner,
    ethersReadonlyProvider,
    sameChain,
    sameSigner,
    initialMockChains,
  } = useMetaMaskEthersSigner();

  const {
    instance: fhevmInstance,
  } = useFhevm({
    provider,
    chainId,
    initialMockChains,
    enabled: true,
  });

  // Load all deals
  const { deals, isLoading: isLoadingDeals, reload: reloadDeals } = useAllDeals({
    chainId,
    ethersReadonlyProvider,
  });

  // Use single deal hook for create functionality
  const dealData = useEncryptedSponsorDeal({
    instance: fhevmInstance,
    fhevmDecryptionSignatureStorage,
    eip1193Provider: provider,
    chainId,
    ethersSigner,
    ethersReadonlyProvider,
    sameChain,
    sameSigner,
    dealId: 1, // This is just for create functionality
  });

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-background">
      <main className="container mx-auto px-4 py-10 space-y-12">
        <section className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Encrypted Sponsorships</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Secure Your Sponsorship Agreements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Store and manage tournament sponsorship deals with end-to-end encryption. Only verified partners
            can access sensitive contract details, ensuring total confidentiality across the lifecycle.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-muted-foreground">
              Zama FHEVM keeps commercial agreements private even when stored and processed on-chain.
            </p>
          </article>
          <article className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Verified Access Only</h3>
            <p className="text-sm text-muted-foreground">
              Wallet-based verification ensures only trusted partners can decrypt and review contract terms.
            </p>
          </article>
          <article className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-success/10 mb-4">
              <Users className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Partner Management</h3>
            <p className="text-sm text-muted-foreground">
              Control who can view, update, and decrypt each sponsorship deal in a single interface.
            </p>
          </article>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-foreground">Active Sponsorship Deals</h2>
              <p className="text-muted-foreground max-w-2xl">
                Each card represents an encrypted agreement stored on-chain. Authorized partners can decrypt
                the financials and terms directly from the UI.
              </p>
            </div>
            <CreateDealButton
              onCreateDeal={async (creator, title, description, budget) => {
                await dealData.createDeal(creator, title, description, budget);
                // Reload all deals after creating
                setTimeout(() => reloadDeals(), 1500);
              }}
              isCreating={dealData.isCreating}
              canCreate={dealData.canCreate ?? false}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoadingDeals ? (
              <div className="col-span-full bg-muted/60 border border-border rounded-2xl p-8 text-center">
                <p className="text-muted-foreground">Loading deals...</p>
              </div>
            ) : deals.length > 0 ? (
              deals.map((dealMeta) => (
                <DealCard
                  key={dealMeta.dealId}
                  dealMeta={dealMeta}
                  fhevmInstance={fhevmInstance}
                  fhevmDecryptionSignatureStorage={fhevmDecryptionSignatureStorage}
                  provider={provider}
                  chainId={chainId}
                  ethersSigner={ethersSigner}
                  ethersReadonlyProvider={ethersReadonlyProvider}
                  sameChain={sameChain}
                  sameSigner={sameSigner}
                />
              ))
            ) : (
              <div className="col-span-full bg-muted/60 border border-border rounded-2xl p-8 text-center">
                <p className="text-muted-foreground">
                  {dealData.isDeployed === false
                    ? "EncryptedSponsorDeal contract not deployed on this network."
                    : "No deals found. Click 'Create New Deal' to get started!"}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-muted/60 border border-border rounded-2xl p-6">
          <h3 className="font-semibold text-foreground mb-4">How It Works</h3>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-semibold text-primary">1.</span>
              Connect your RainbowKit wallet to authenticate.
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">2.</span>
              Browse encrypted sponsorship deals sourced directly from our smart contracts.
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">3.</span>
              If you are a verified partner, decrypt budgets and contract terms securely.
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">4.</span>
              Approve updates or close deals—all actions remain encrypted end-to-end.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
