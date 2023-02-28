import { getServerSession } from 'next-auth/next'
import PostList from '@/ui/posts/PostList'
import CreatePostForm from './components/CreatePostForm'
import { prisma } from '@/server/db'
import { authOptions } from '@/server/auth'
const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany()
    const users = await prisma.user.findMany()
    const userPosts = posts.map((post) => {
      const user = users.find((user) => user.id === post.userId)
      return { ...post, imgSrc: user?.image, fullNameUser: user?.name, userEmail: user?.email }
    })
    return userPosts
  } catch (e) {
    console.error(e)
  }
}

export default async function PostsPage() {
  const posts = await getPosts()
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  return (
    <>
      <h1>Posts page</h1>
      {email && <CreatePostForm />}
      {posts && <PostList posts={posts} />}
    </>
  )
}
