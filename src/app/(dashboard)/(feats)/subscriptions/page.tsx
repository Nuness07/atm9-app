"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const testAI = useMutation(
    trpc.testAI.mutationOptions({
      onSuccess: (data) => {
        toast.success("AI Test Success:");
      },
      onError: ({ message }) => {
        toast.error(message);
      },
    })
  );

  return <Button onClick={() => testAI.mutate()}>Run Subscription Test</Button>;
};

export default Page;
