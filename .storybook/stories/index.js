import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Input } from '../../src/index';

storiesOf("Button", module).add("with text", () => (
  <Button label={'Hello Button'} />
));

storiesOf("Input", module).add("with text", () => (
  <Input label={'First Name'} />
));