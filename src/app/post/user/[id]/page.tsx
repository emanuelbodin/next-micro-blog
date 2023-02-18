import { Post } from "@/app/post/post.interface";
import PostList from "@/ui/posts/PostList";
import { get } from "@/utils/fetch";

const getPostsForUser = async (userId: string) => {
  const posts = await get<Post[]>(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  return posts;
};

export default async function PostForUserPage({
  params,
}: {
  params: { id: string };
}) {
  const posts = await getPostsForUser(params.id);
  await fetch("http://localhost:3000/api/hello");

  return (
    <>
      <h1>Post page</h1>
      <PostList posts={posts} />
    </>
  );
}
