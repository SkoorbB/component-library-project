import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
.add('Primary', () => <Button
label="Do Something"
type="primary"
white
/>)

.add('Outline Primary', () => <Button
label="Do Something"
type="primary"
outline
/>)

.add('Gradient Primary', () => <Button
label="Do Something"
type="primary"
gradient
/>)

.add('Big Primary', () => <Button
label="Do Something"
type="primary"
big
/>)

.add('Big Outline Primary', () => <Button
label="Do Something"
type="primary"
outline
big
/>)

.add('Big Gradient Primary', () => <Button
label="Do Something"
type="primary"
gradient
big
/>)

.add('Danger', () => <Button
label="Do Something"
type="danger"
/>)