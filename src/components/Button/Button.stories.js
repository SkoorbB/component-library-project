import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
.add('Primary', () => <Button
label="Do Something"
type="primary"
/>)

.add('Outline Primary', () => <Button
label="Do Something"
type="primary"
outline
/>)

