import { google } from "@ai-sdk/google";
import { generateText } from "ai";

import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";
import { createTRPCRouter, premiumProcedure, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "gnmf2000@gmail.com",
      },
    });

    return { success: true, message: "Workflow queued" };
  }),
  testAI: premiumProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
      data: {},
    });

    return { success: true, message: "AI Execution queued" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
