import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type Session } from "next-auth";
import type { inferAsyncReturnType } from '@trpc/server';

import { getServerAuthSession } from "@/server/auth";
import { prisma } from "@/server/db";

interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
    session: Session | null
}

type CreateContextOptions = {
    session: Session | null;
  };

  const createContextInner = (opts?: CreateInnerContextOptions) => {
    return {
      session: opts?.session,
      prisma,
    };
  };

  export const createContext = async (opts: CreateNextContextOptions) => {
    const { req, res } = opts;
      const session = await getServerAuthSession(req, res );
    const contextInner = createContextInner({session})
    return {
        ...contextInner,
    req: opts.req,
    res: opts.res,
    };
  };

  export type Context = inferAsyncReturnType<typeof createContextInner>;

  