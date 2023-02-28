import { ComponentStory, ComponentMeta } from '@storybook/react'

import CommentList from './CommentList'

export default {
  title: 'UI/posts/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const List = Template.bind({})
List.args = {
  comments: [
    {
      id: 1,
      postId: 1,
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date(),
      body: 'bla bla bla bla',
      user: {
        fullName: 'user 1',
        email: 'user1@mail.com',
        avatarSrc:
          'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      postId: 2,
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date(),
      body: 'bla bla bla bla',
      user: {
        fullName: 'user 2',
        email: 'user2@mail.com',
        avatarSrc:
          'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      postId: 2,
      userId: 'user3',
      createdAt: new Date(),
      updatedAt: new Date(),
      body: 'bla bla bla bla',
      user: {
        fullName: 'user 3',
        email: 'user3@mail.com',
        avatarSrc:
          'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ],
}

export const EmptyList = Template.bind({})
EmptyList.args = { comments: [] }
