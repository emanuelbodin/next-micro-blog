import { createNextApiHandler } from '@trpc/server/adapters/next'

import { appRouter } from '@/server/api/routers/root'
import { createContext } from '@/server/api/trpc/context'

export default createNextApiHandler({
  router: appRouter,
  createContext,
})
