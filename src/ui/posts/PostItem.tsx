import { Post } from "../../app/post/post.interface";
import Link from "next/link";

export default function PostItem({
  id,
  title,
  body,
  userId,
  created,
  updated,
}: Post) {
  return (
    <div className="bg-gray-800	border-slate-300 border-2 my-4 p-4 text-slate-200 basis-1/4">
      <Link href={`/post/${id}`}>
        <h3 className="font-bold text-lg">{title}</h3>
      </Link>
      <p>{created}</p>
      <p>{body}</p>
      <p>
        <Link href={`/post/user/${userId}`}> user: {userId}</Link>
      </p>
    </div>
  );
}