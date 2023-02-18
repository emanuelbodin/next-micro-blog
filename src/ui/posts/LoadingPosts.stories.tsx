import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoadingPostSkeleton from "./LoadingPost";

export default {
  name: "UI/posts/LoadingPostSkeleton",
  component: LoadingPostSkeleton,
} as ComponentMeta<typeof LoadingPostSkeleton>;

const Template: ComponentStory<typeof LoadingPostSkeleton> = (args) => (
  <LoadingPostSkeleton />
);

export const Loading = Template.bind({});
