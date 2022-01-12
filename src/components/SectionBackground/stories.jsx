import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, excepturi? Deserunt labore quisquam error
          atque eius, sit odit ut officiis quo corrupti modi obcaecati! Officiis quibusdam illo minima nesciunt
          recusandae.
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
      <SectionBackground {...args} />
    </div>
  );
};
