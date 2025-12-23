"use client";

import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/features/logout/loggout-button";
import { requireAuth } from "@/lib/auth-utils";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  // await requireAuth();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const createWorkflow = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
       toast.success("Workflow queued successfully");
      },
    })
  );

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center gap-y-4 flex-col">
      Logado
      {JSON.stringify(data)}
      <Button onClick={() => createWorkflow.mutate()}>Create Workflow</Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
