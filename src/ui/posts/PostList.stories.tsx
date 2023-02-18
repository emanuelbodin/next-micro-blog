import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostList from "./PostList";

export default {
  title: "UI/posts/PostList",
  component: PostList,
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = (args) => (
  <PostList {...args} />
);

export const List = Template.bind({});
List.args = {
  posts: [
    {
      id: 1,
      title: "A post 1",
      body: "Hello world",
      userId: 1,
      created: "2023-01-01",
      updated: "2023-01-01",
    },
    {
      id: 2,
      title: "A post 2",
      body: "Hello world",
      userId: 1,
      created: "2023-01-01",
      updated: "2023-01-01",
    },
    {
      id: 3,
      title: "A post 3",
      body: "Hello world",
      userId: 1,
      created: "2023-01-01",
      updated: "2023-01-01",
    },
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = { posts: [] };
