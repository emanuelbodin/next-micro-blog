import PostItem from "./PostItem";
import { Post } from "../../app/post/post.interface";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      <h2>All posts</h2>
      <div className="flex flex-col">
        {!posts.length && "No posts"}
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            created={post.created}
            updated={post.updated}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  );
}
