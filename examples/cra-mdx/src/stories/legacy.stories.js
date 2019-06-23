import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

storiesOf('Legacy|Button', module)
  .addParameters({ component: Button })
  .add('with text', () => <Button onClick={action('text')}>Hello Button</Button>)
  .add('with some emoji (in fragment)', () => (
    <>
      <Button onClick={action('emoji')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </>
  ));
