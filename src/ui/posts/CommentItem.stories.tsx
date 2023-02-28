import { ComponentStory, ComponentMeta } from '@storybook/react'

import CommentItem from './CommentItem'

export default {
  title: 'UI/posts/CommentItem',
  component: CommentItem,
} as ComponentMeta<typeof CommentItem>

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />
export const Comment = Template.bind({})
Comment.args = {
  userId: 'user123',
  user: {
    fullName: 'User 1',
    email: 'user1@mail.com',
    avatarSrc:
      'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  createdAt: new Date(),
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quae quaerat hic vel est atque repudiandae similique, repellat rerum vero nemo nulla sapiente quam voluptatibus quidem fugit ab commodi illo!',
}
