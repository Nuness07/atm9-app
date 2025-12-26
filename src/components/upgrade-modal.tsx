"use client";

import { authClient } from "@/lib/auth-client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface UpgradeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UpgradeModal = ({ open, onOpenChange }: UpgradeModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Upgrade to Pro</AlertDialogTitle>
          <AlertDialogDescription>
            You need an active subscription to perform this action. Upgrade to
            Pro to unlock all features and enjoy unlimited access.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel onClick={() => authClient.checkout({ slug: "pro" })}>
          Upgrade Now
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
