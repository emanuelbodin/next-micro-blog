import PostList from '@/ui/posts/PostList'
import prisma from '@/lib/prisma'

const getPostsForUser = async (userEmail: string) => {
  const posts = await prisma.post.findMany({
    where: { userEmail },
  })
  return posts
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
      <PostList posts={posts} />
    </>
  )
}
