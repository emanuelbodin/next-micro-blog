'use client'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

import { TextAreaInput, TextInput } from '@/ui/form'
import SubmitButton from '@/ui/form/SubmitButton'
import { post } from '@/utils/fetch'
import { Post } from '@prisma/client'

type Props = {
  userEmail: string
}

export default function CreatePostForm({ userEmail }: Props) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const [isPending, startTransition] = useTransition()

  const isMutating = isFetching || isPending

  const onCreatePost = async (e: FormDataEvent) => {
    e.preventDefault()
    setIsFetching(true)
    const payload = { title, body, userEmail }
    await post<Post>('/api/post', payload)
    setIsFetching(false)
    startTransition(() => {
      router.refresh()
    })
  }
  return (
    <form className={`flex flex-col gap-y-2 my-4 ${isMutating ? 'opacity-50' : null}`}>
      <TextInput id="title" label="Title" value={title} onChange={setTitle} />
      <TextAreaInput id="body" label="Body" value={body} onChange={setBody} />
      <SubmitButton label="Create Post" onClick={onCreatePost} />
    </form>
  )
}
