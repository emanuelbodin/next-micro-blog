import PostItem, { UserPostItem } from './PostItem'

type Props = {
  posts: UserPostItem[]
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
            body={post.body}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            userEmail={post.userEmail}
            imgSrc={post.imgSrc}
            fullNameUser={post.fullNameUser}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  )
}
