import pb from "@/utils/pocketbase";
import { Post, Comment } from "@/app/post/post.interface";
import PostItem from "../../../ui/posts/PostItem";
import CommentList from "../../../ui/posts/CommentList";
import { get } from "@/utils/fetch";

const getPostById = async (postId: string) => {
  const post = await get<Post>(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`
  );
  return post;
};

const getCommentsForPost = async (postId: string) => {
  const data = await pb
    .collection("comments")
    .getList<Comment>(1, 50, { filter: `postId="${postId}"` });

  return data?.items ?? [];
};

export default async function PostPage({ params }: { params: { id: string } }) {
  const postId = params.id;
  const postData = getPostById(postId);
  const commentsData = getCommentsForPost(postId);

  const [post, comments] = await Promise.all([postData, commentsData]);

  return (
    <>
      <h1>Post page</h1>
      <PostItem
        id={post.id}
        title={post.title}
        body={post.body}
        userId={post.userId}
        created={post.created}
        updated={post.updated}
      />
      <CommentList comments={comments} />
    </>
  );
}
