import { ComponentStory, ComponentMeta } from '@storybook/react'

import PostList from './PostList'

export default {
  title: 'UI/posts/PostList',
  component: PostList,
} as ComponentMeta<typeof PostList>

const Template: ComponentStory<typeof PostList> = (args) => <PostList {...args} />

export const List = Template.bind({})
List.args = {
  posts: [
    {
      id: 1,
      fullNameUser: 'User 1',
      userEmail: 'user1@mail.com',
      body: 'Hello world',
      imgSrc:
        'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      fullNameUser: 'User 2',
      userEmail: 'user2@mail.com',
      body: 'Hello world',
      imgSrc:
        'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      fullNameUser: 'User 3',
      userEmail: 'user3@mail.com',
      body: 'Hello world',
      imgSrc:
        'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
}

export const EmptyList = Template.bind({})
EmptyList.args = { posts: [] }
