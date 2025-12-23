"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface CreateDealButtonProps {
  onCreateDeal: (
    creator: string,
    title: string,
    description: string,
    budget: number
  ) => Promise<void>;
  isCreating: boolean;
  canCreate: boolean;
}

export const CreateDealButton = ({
  onCreateDeal,
  isCreating,
  canCreate,
}: CreateDealButtonProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!creator || !title || !description || !budget) {
      toast.error("Please fill in all fields");
      return;
    }

    const budgetNum = parseInt(budget);
    if (isNaN(budgetNum) || budgetNum <= 0) {
      toast.error("Budget must be a positive number");
      return;
    }

    setIsSubmitting(true);
    try {
      await onCreateDeal(creator, title, description, budgetNum);
      toast.success("Deal created successfully!");
      setOpen(false);
      // Reset form
      setCreator("");
      setTitle("");
      setDescription("");
      setBudget("");
    } catch (error) {
      toast.error("Failed to create deal: " + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button disabled={!canCreate} size="lg" title={!canCreate ? "Waiting for wallet and FHEVM instance..." : "Create a new deal"}>
          <Plus className="w-4 h-4 mr-2" />
          {!canCreate ? "Initializing..." : "Create New Deal"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create Sponsorship Deal</DialogTitle>
            <DialogDescription>
              Create a new encrypted sponsorship deal. The budget will be encrypted on-chain using FHE.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="creator">Creator Address</Label>
              <Input
                id="creator"
                placeholder="0x..."
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
                disabled={isCreating}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="title">Deal Title</Label>
              <Input
                id="title"
                placeholder="e.g., Major League Gaming Championship 2024"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isCreating}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter deal terms and description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isCreating}
                rows={4}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="budget">Budget (USD)</Label>
              <Input
                id="budget"
                type="number"
                placeholder="e.g., 500000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                disabled={isCreating}
              />
              <p className="text-xs text-muted-foreground">
                This value will be encrypted using FHE before storing on-chain
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isCreating || !canCreate || isSubmitting}>
              {isSubmitting ? "Creating..." : isCreating ? "Initializing..." : "Create Deal"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
