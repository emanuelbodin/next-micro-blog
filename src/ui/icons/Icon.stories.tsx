import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './Icon'

export default {
  title: 'UI/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const IconComponent = Template.bind({})
IconComponent.args = {
  iconName: 'heart',
  color: 'pink-active',
  onClick: () => {},
}
