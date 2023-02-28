import PostList from '@/ui/posts/PostList'
import { prisma } from '@/server/db'

const getPostsForUser = async (userEmail: string) => {
  try {
    const posts = await prisma.post.findMany({
      where: { userEmail },
    })
    return posts
  } catch (e) {
    console.error(e)
  }
}

type Props = {
  params: {
    userEmail: string
  }
}

export default async function PostForUserPage({ params }: Props) {
  const userEmail = decodeURIComponent(params.userEmail)
  const posts = await getPostsForUser(userEmail)

  return (
    <>
      <h1>Posts page by {userEmail}</h1>
      {posts && <PostList posts={posts} />}
    </>
  )
}
