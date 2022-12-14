import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostButton, { IPostButton } from './PostButton';
import { mockPostButtonProps } from './PostButton.mocks';

export default {
  title: 'buttons/PostButton',
  component: PostButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PostButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostButton> = (args) => (
  <PostButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPostButtonProps.base,
} as IPostButton;
