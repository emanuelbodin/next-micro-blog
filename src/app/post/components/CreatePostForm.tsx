"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { TextAreaInput, TextInput } from "@/ui/form";
import SubmitButton from "@/ui/form/SubmitButton";
import pb from "@/utils/pocketbase";
import { Post } from "../post.interface";

const createPost = async (title: string, body: string) => {
  const payload = { title, body, userId: "user1" };
  const createdPost = await pb.collection("posts").create<Post>(payload);
  return createdPost;
};

export default function CreatePostForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const [isPending, startTransition] = useTransition();

  const isMutating = isFetching || isPending;

  const onCreatePost = async (e: FormDataEvent) => {
    e.preventDefault();
    setIsFetching(true);
    await createPost(title, body);
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <form
      className={`flex flex-col gap-y-2 my-4 ${
        isMutating ? "opacity-50" : null
      }`}
    >
      <TextInput id="title" label="Title" value={title} onChange={setTitle} />
      <TextAreaInput id="body" label="Body" value={body} onChange={setBody} />
      <SubmitButton label="Create Post" onClick={onCreatePost} />
    </form>
  );
}
