import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Facilis, est nihil. Autem asperiores dolores
    esse dolorem repudiandae? Unde, non quasi!
    Dolores minus nisi necessitatibus quae eos expedita omnis nam fugit`,
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
