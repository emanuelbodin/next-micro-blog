import { Post } from '@prisma/client'
import Link from 'next/link'
import Icon from '../icons/Icon'
import Avatar from '../user/Avatar'
import PostActionBar from './PostActionBar'

export interface UserPostItem extends Post {
  imgSrc?: string
  fullNameUser?: string
  userEmail?: string
}

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

export default function PostItem({
  id,
  body,
  fullNameUser,
  userId,
  userEmail,
  createdAt,
  updatedAt,
  imgSrc,
}: UserPostItem) {
  const dateString = `${createdAt.getDay()} ${monthNames[createdAt.getMonth()]}`
  const userText = `${fullNameUser} · @${userEmail} · ${dateString}` ?? 'Unknown user'
  return (
    <div className="bg-neutral-900 border-slate-700 border border-b-0 last:border-b p-2 text-slate-200">
      <div className="flex flex-row">
        <div className="basis-1/12">
          <Avatar src={imgSrc} />
        </div>
        <div className="basis-10/12">
          <Link href={`/post/user/${userId}`}>{userText}</Link>
          <Link href={`/post/${id}`}>
            <p>{body}</p>
          </Link>
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
