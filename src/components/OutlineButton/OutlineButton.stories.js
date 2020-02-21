import React from 'react';
import { storiesOf } from '@storybook/react';
import OutlineButton from './OutlineButton';

storiesOf('OutlineButton', module)
.add('Outline Primary', () => <OutlineButton
label="Do Something"
type="outlineprimary"
/>)