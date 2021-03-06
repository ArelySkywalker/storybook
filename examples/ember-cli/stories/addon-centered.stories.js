import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import Centered from '@storybook/addon-centered/ember';

storiesOf('Addon|Centered', module)
  .addParameters({
    component: Centered,
  })
  .addDecorator(Centered)
  .add('button', () => ({
    template: hbs`<button>A Button</button>`,
  }));
