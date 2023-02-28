import { ComponentStory, ComponentMeta } from '@storybook/react'

import PostActionBar from './PostActionBar'

export default {
  title: 'UI/posts/PostActionBar',
  component: PostActionBar,
} as ComponentMeta<typeof PostActionBar>

const Template: ComponentStory<typeof PostActionBar> = (args) => <PostActionBar />
export const Index = Template.bind({})
