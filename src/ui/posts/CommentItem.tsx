import Link from 'next/link'
import { Comment } from '@prisma/client'
import Avatar from '../user/Avatar'
import PostActionBar from './PostActionBar'
import Icon from '../icons/Icon'

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
export interface CommentItemProps extends Comment {
  user: {
    fullName: string
    avatarSrc: string
    email: string
  }
}

export default function CommentItem({ userId, body, createdAt, user }: CommentItemProps) {
  const dateString = `${createdAt.getDay()} ${monthNames[createdAt.getMonth()]}`
  const userText = `${user.fullName} · @${user.email} · ${dateString}` ?? 'Unknown user'
  return (
    <div className="bg-neutral-900 border-slate-700 border border-b-0 last:border-b p-2 text-slate-200">
      <div className="flex flex-row">
        <div className="basis-1/12">
          <Avatar src={user.avatarSrc} />
        </div>
        <div className="basis-10/12">
          <Link href={`/post/user/${userId}`}>{userText}</Link>
          <p>{body}</p>
        </div>
        <div className="basis-1/12 flex justify-end">
          <Icon iconName="ellipsis" color="gray" />
        </div>
      </div>
      <div className="flex flex-row w-full justify-center mt-5">
        <PostActionBar />
      </div>
    </div>
  )
}
