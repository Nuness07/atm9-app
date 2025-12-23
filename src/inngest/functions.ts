import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("prepariing-document", "5s");
    await step.sleep("transcribing-document", "5s");
    await step.sleep("sending-to-ai", "5s");

    await step.run("create-workflow", () => {
        return prisma.workflow.create({
            data: {
                name: `Workflow for ${event.data.email}`,
            },
        });
    })
  }
);
