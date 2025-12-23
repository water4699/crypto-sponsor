"use client";

import { useState } from "react";
import { Lock, LockOpen, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAccount } from "wagmi";
import { toast } from "sonner";

interface SponsorshipDeal {
  id: string;
  title: string;
  sponsor: string;
  tournament: string;
  value: string;
  duration: string;
  terms: string;
  status: "locked" | "unlocked";
  verifiedPartners: string[];
}

interface SponsorshipCardProps {
  deal: SponsorshipDeal;
  onDecrypt: (id: string) => void;
}

const SponsorshipCard = ({ deal, onDecrypt }: SponsorshipCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { address, isConnected } = useAccount();
  const normalizedAddress = address?.toLowerCase();
  const isVerified = normalizedAddress && deal.verifiedPartners.map((v) => v.toLowerCase()).includes(normalizedAddress);
  const isLocked = deal.status === "locked";

  const handleDecrypt = () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }
    if (!isVerified) {
      toast.error("You are not a verified partner for this deal");
      return;
    }
    onDecrypt(deal.id);
    toast.success("Contract decrypted successfully");
  };

  return (
    <Card
      className={`transition-all duration-300 hover:shadow-lg overflow-hidden ${
        isLocked
          ? "border-locked/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
          : "border-success/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl mb-2 break-words">{deal.title || "Untitled Deal"}</CardTitle>
            <CardDescription className="flex flex-col gap-1">
              <span className="text-sm">
                <strong>Sponsor:</strong> {deal.sponsor}
              </span>
              <span className="text-sm">
                <strong>Tournament:</strong> {deal.tournament}
              </span>
            </CardDescription>
          </div>
          <Badge
            variant={isLocked ? "destructive" : "default"}
            className={isLocked ? "bg-locked" : "bg-success"}
          >
            {isLocked ? (
              <>
                <Lock className="w-3 h-3 mr-1" />
                Locked
              </>
            ) : (
              <>
                <LockOpen className="w-3 h-3 mr-1" />
                Unlocked
              </>
            )}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted/50 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Contract Value</p>
            {isLocked ? (
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-locked" />
                <span className="text-sm font-mono">••••••••</span>
              </div>
            ) : (
              <p className="text-lg font-bold text-primary">{deal.value}</p>
            )}
          </div>
          <div className="bg-muted/50 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Duration</p>
            {isLocked ? (
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-locked" />
                <span className="text-sm font-mono">••••••••</span>
              </div>
            ) : (
              <p className="text-lg font-bold text-primary">{deal.duration}</p>
            )}
          </div>
        </div>
        <div className="bg-muted/50 p-3 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted-foreground">Contract Terms</p>
            {!isLocked && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDetails(!showDetails)}
                className="h-6 px-2"
              >
                {showDetails ? (
                  <>
                    <EyeOff className="w-3 h-3 mr-1" />
                    Hide
                  </>
                ) : (
                  <>
                    <Eye className="w-3 h-3 mr-1" />
                    Show
                  </>
                )}
              </Button>
            )}
          </div>
          {isLocked ? (
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-locked" />
              <span className="text-sm font-mono">████████████████████</span>
            </div>
          ) : showDetails ? (
            <p className="text-sm text-foreground">{deal.terms}</p>
          ) : (
            <p className="text-sm text-muted-foreground italic">Click Show to view terms</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {isLocked ? (
          <Button
            onClick={handleDecrypt}
            disabled={!isConnected || !isVerified}
            className="w-full"
            variant="default"
          >
            <Lock className="w-4 h-4 mr-2" />
            {!isConnected
              ? "Connect Wallet to Decrypt"
              : !isVerified
              ? "Not Authorized"
              : "Decrypt Contract"}
          </Button>
        ) : (
          <Badge variant="outline" className="w-full justify-center py-2 border-success text-success">
            <LockOpen className="w-4 h-4 mr-2" />
            Contract Accessible
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default SponsorshipCard;
