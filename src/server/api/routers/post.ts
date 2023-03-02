import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '@/server/api/trpc/trpc'

export const postRouter = createTRPCRouter({
  getById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    const post = ctx.prisma.post.findUnique({ where: { id: parseInt(input.id) } })
    return post
  }),

  createPost: protectedProcedure.input(z.object({ body: z.string() })).mutation((req) => {
    const { ctx, input } = req
    const newPost = ctx.prisma.post.create({
      data: { body: input.body, userId: ctx.session.user.id },
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
