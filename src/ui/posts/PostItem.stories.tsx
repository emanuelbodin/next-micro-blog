import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostItem from "./PostItem";

export default {
  title: "UI/posts/PostItem",
  component: PostItem,
} as ComponentMeta<typeof PostItem>;

const Template: ComponentStory<typeof PostItem> = (args) => (
  <PostItem {...args} />
);

export const Post = Template.bind({});
Post.args = {
  id: 1,
  title: "A post",
  body: "Hello world",
  userId: 1,
  created: "2023-01-01",
  updated: "2023-01-01",
};
