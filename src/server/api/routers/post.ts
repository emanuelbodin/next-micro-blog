import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '@/server/api/trpc'

export const postRouter = createTRPCRouter({
  getById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    const post = ctx.prisma.post.findUnique({ where: { id: parseInt(input.id) } })
    return post
  }),

  createPost: protectedProcedure.input(z.object({ body: z.string() })).mutation((req) => {
    const userSession = req.ctx.session
    const newPost = req.ctx.prisma.post.create({
      data: { body: req.input.body, userId: userSession.user.id },
    })
    return newPost
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany()
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),
})
