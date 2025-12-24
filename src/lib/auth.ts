import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { checkout, polar, portal } from "@polar-sh/better-auth";

import { polarClient } from "./polar";

import prisma from "@/lib/db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [{
            productId: "95253401-361b-49c5-8876-87500b66e8f0",
            slug: "pro"
          }]
        }),
        portal()
      ],
      successUrl: process.env.POLAR_SUCCESS_URL,
      authenticatedUsersOnly: true,
    })
  ]
});
