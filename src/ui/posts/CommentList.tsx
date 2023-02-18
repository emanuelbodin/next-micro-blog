import CommentItem from "./CommentItem";
import { Comment } from "../../app/post/post.interface";

type Props = {
  comments: Comment[];
};

export default function CommentList({ comments }: Props) {
  return (
    <div className="w-3/4 border-2 border-white	mx-auto">
      <p>Comments:</p>
      {!comments.length && "No comments"}
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          userId={comment.userId}
          body={comment.body}
          created={comment.created}
        />
      ))}
    </div>
  );
}
