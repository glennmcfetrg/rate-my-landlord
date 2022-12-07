import { ComponentMeta, ComponentStory } from '@storybook/react';
import Cat, { ICat } from './Cat';
import { mockCatProps } from './Cat.mocks';

export default {
  title: 'cards/Cat',
  component: Cat,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Cat>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Cat> = (args) => <Cat {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCatProps.base,
} as ICat;
