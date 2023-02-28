import CommentItem, {type CommentItemProps} from './CommentItem'
import { Comment } from '@prisma/client'
type Props = {
  comments: CommentItemProps[]
}

export default function CommentList({ comments }: Props) {
  return (
    <div className="w-3/4 border-2 border-white	mx-auto">
      <p>Comments:</p>
      {!comments.length && 'No comments'}
      {comments.map((comment) => (
        <CommentItem
          id={comment.id}
          key={comment.id}
          userId={comment.userId}
          user={comment.user}
          body={comment.body}
          createdAt={comment.createdAt}
          updatedAt={comment.updatedAt}
        />
      ))}
    </div>
  )
}
