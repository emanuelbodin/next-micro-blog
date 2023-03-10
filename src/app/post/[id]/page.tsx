import { prisma } from '@/server/db'
import PostItem from '@/ui/posts/PostItem'
import CommentList from '@/ui/posts/CommentList'

const getPostById = async (postId: number) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        comments: true,
      },
    })
    return post
  } catch (e) {
    console.error(e)
  }
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(parseInt(params.id))
  return (
    <>
      <h1>Post page</h1>
      {post && (
        <>
          <PostItem
            id={post.id}
            title={post.title}
            body={post.body}
            userEmail={post.userEmail}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
          />
          <CommentList comments={post.comments ?? []} />
        </>
      )}
    </>
  )
}
