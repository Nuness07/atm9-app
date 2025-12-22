import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/features/logout/loggout-button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  const users = await caller.getUsers();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center gap-y-4 flex-col">
      Logado
      {JSON.stringify(users)}
      <LogoutButton />
    </div>
  );
};

export default Page;
