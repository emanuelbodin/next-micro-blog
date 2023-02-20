import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') createPost(req, res)
  res.status(400)
}

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, body, userEmail } = JSON.parse(req.body)
  const createdPost = await prisma.post.create({
    data: {
      title,
      body,
      userEmail,
    },
  })
  res.status(201).json(createdPost)
}
