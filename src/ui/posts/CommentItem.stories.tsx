import { ComponentStory, ComponentMeta } from "@storybook/react";

import CommentItem from "./CommentItem";

export default {
  title: "UI/posts/CommentItem",
  component: CommentItem,
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => (
  <CommentItem {...args} />
);
export const Comment = Template.bind({});
Comment.args = {
  userId: "user123",
  created: "2023-01-01",
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quae quaerat hic vel est atque repudiandae similique, repellat rerum vero nemo nulla sapiente quam voluptatibus quidem fugit ab commodi illo!",
};
