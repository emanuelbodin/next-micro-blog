import { ComponentStory, ComponentMeta } from "@storybook/react";

import CommentList from "./CommentList";

export default {
  title: "UI/posts/CommentList",
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const List = Template.bind({});
List.args = {
  comments: [
    {
      id: 1,
      postId: 1,
      userId: "user1",
      created: "2023-01-01",
      updated: "2023-01-01",
      body: "bla bla bla bla",
    },
    {
      id: 2,
      postId: 2,
      userId: "user1",
      created: "2023-01-01",
      updated: "2023-01-01",
      body: "bla bla bla bla",
    },
    {
      id: 3,
      postId: 2,
      userId: "user3",
      created: "2023-01-01",
      updated: "2023-01-01",
      body: "bla bla bla bla",
    },
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = { comments: [] };
