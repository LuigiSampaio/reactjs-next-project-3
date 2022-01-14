import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consectetur non at numquam enim hic. uibusdam aperiam aliquam cupiditate
    ullam eaque! Cumque tenetur tempora placeat. Maxime non fugit necessitatibus quam? Est.`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
