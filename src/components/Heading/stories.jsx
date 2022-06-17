import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Light Hello World',
    uppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
    darkColor: { type: 'boolean' },
    uppercase: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Light.args = {
  children: 'Dark Hello World',
  darkColor: true,
};

Dark.args = {
  children: 'Light Hello World',
  darkColor: false,
};
