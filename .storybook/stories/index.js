import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomButton from '../../src/index';

storiesOf("Button", module).add("with text", () => (
  <CustomButton label={'Custom Button'} />
));