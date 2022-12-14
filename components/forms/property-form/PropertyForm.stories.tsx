import { ComponentMeta, ComponentStory } from '@storybook/react';
import PropertyForm, { IPropertyForm } from './PropertyForm';
import { mockPropertyFormProps } from './PropertyForm.mocks';

export default {
  title: 'forms/PostButton',
  component: PropertyForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PropertyForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PropertyForm> = (args) => (
  <PropertyForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPropertyFormProps.base,
} as IPropertyForm;
