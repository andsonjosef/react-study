import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Dolore laboris sunt commodo qui nostrud elit commodo culpa veniam enim
          mollit veniam. Non consectetur occaecat dolor mollit laborum dolor
          laborum nostrud laboris. Dolore eiusmod minim esse ad sint dolor aute
          veniam quis esse ad. Consequat commodo est Lorem cillum ex nostrud
          proident culpa ea amet fugiat non ad excepteur. Voluptate dolor aute
          aliqua culpa consectetur. Et et sint fugiat aute adipisicing ut.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
