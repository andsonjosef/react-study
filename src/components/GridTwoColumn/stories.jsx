import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two columns',
    text: `Sint irure id incididunt voluptate.
      Laborum anim nulla adipisicing eu excepteur enim aute excepteur.
      Est labore ad cupidatat eiusmod adipisicing exercitation laboris.
      Eiusmod et pariatur sunt qui deserunt officia pariatur esse voluptate officia cillum consequat.
      Nostrud in deserunt do proident occaecat anim sunt Lorem ex cillum ad nisi reprehenderit.`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImg: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
