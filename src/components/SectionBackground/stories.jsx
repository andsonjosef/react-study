import { bool } from 'prop-types';
import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionContainer</h1>
          <p>
            Dolore laboris sunt commodo qui nostrud elit commodo culpa veniam
            enim enim mollit veniam. Non consectetur occaecat dolor mollit
            laborum nostrud laboris. Dolore eiusmod minim esse ad sint dolor
            aute veniam quis esse ad. Consequat commodo est Lorem cillum ex
            proident culpa ea amet fugiat non ad excepteur. Voluptate dolor aute
            aliqua culpa consectetur. Et et sint fugiat aute adipisicing ut.
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
