import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Adipisicing ut proident quis ex excepteur consequat eiusmod.
      Nisi aute aute mollit minim nisi qui. Eiusmod sint tempor anim enim.
      Magna dolor consectetur ad excepteur magna fugiat aliqua mollit aliquip deserunt incididunt in.
      Sunt laboris fugiat voluptate in elit incididunt amet fugiat aliqua consequat officia.
      Proident officia fugiat eu excepteur sint exercitation ullamco nulla irure sunt qui non irure.
      Occaecat pariatur irure cillum et non quis duis velit velit in.
      `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
