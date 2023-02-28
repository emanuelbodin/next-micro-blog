import { ComponentStory, ComponentMeta } from '@storybook/react'

import PostItem from './PostItem'

export default {
  title: 'UI/posts/PostItem',
  component: PostItem,
} as ComponentMeta<typeof PostItem>

const Template: ComponentStory<typeof PostItem> = (args) => <PostItem {...args} />

export const Post = Template.bind({})
Post.args = {
  id: 1,
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  imgSrc:
    'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: 1,
  fullNameUser: 'User 1',
  userEmail: 'test@gmail.com',
}
