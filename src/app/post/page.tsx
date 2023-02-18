import { Post } from "./post.interface";
import PostList from "../../ui/posts/PostList";
import { get } from "@/utils/fetch";
import CreatePostForm from "./components/CreatePostForm";

const getPosts = async () => {
  const data = await get<{ items: Post[] }>(
    "http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30"
  );
  return data?.items ?? [];
};

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>Posts page</h1>
      <CreatePostForm />
      <PostList posts={posts} />
    </>
  );
}
