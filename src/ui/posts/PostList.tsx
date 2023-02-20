import PostItem from './PostItem'
import { Post } from '@prisma/client'

type Props = {
  posts: Post[]
}

export default function PostList({ posts }: Props) {
  return (
    <>
      <div className="flex flex-col">
        {!posts.length && 'No posts'}
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            userEmail={post.userEmail}
          />
        ))}
      </div>
    </>
  )
}
