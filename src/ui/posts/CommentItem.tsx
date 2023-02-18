import { Comment } from "../../app/post/post.interface";

type Props = {
  userId: string;
  body: string;
  created: string;
};

export default function CommentItem({ userId, body, created }: Props) {
  return (
    <div className="p-4">
      <p>{created}</p>
      <p>{body}</p>
      <p>User: {userId}</p>
    </div>
  );
}
