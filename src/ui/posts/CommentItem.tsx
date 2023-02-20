type Props = {
  userId: string
  body: string
  createdAt: string
}

export default function CommentItem({ userId, body, createdAt }: Props) {
  return (
    <div className="p-4">
      <p>{createdAt.toDateString()}</p>
      <p>{body}</p>
      <p>User: {userId}</p>
    </div>
  )
}
