import { getServerSession } from 'next-auth/next'
import PostList from '@/ui/posts/PostList'
import CreatePostForm from './components/CreatePostForm'
import prisma from '@/lib/prisma'

const getPosts = async () => {
  const posts = await prisma.post.findMany()

  return posts
}

export default async function PostsPage() {
  const posts = await getPosts()
  const session = await getServerSession()
  const email = session?.user?.email
  return (
    <>
      <h1>Posts page</h1>
      {email && <CreatePostForm userEmail={email} />}
      <PostList posts={posts} />
    </>
  )
}
