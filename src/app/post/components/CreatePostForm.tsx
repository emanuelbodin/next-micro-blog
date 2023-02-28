'use client'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

import { TextAreaInput } from '@/ui/form'
import SubmitButton from '@/ui/form/SubmitButton'
import { trpc } from '@/utils/TrpcClient'

export default function CreatePostForm() {
  const router = useRouter()
  const [body, setBody] = useState('')

  const { mutate: createPost, isLoading, isError, isSuccess } = trpc.post.createPost.useMutation()

  const [isPending, startTransition] = useTransition()

  const isMutating = isLoading || isPending

  const onCreatePost = async (e: FormDataEvent) => {
    e.preventDefault()
    createPost({ body })
    startTransition(() => {
      router.refresh()
    })
  }
  return (
    <form className={`flex flex-col gap-y-2 my-4 ${isMutating ? 'opacity-50' : null}`}>
      <TextAreaInput id="body" label="Body" value={body} onChange={setBody} />
      <SubmitButton label="Create Post" onClick={onCreatePost} />
    </form>
  )
}
