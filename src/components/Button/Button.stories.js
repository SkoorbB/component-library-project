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
type="gprimary"
/>)

.add('Big Primary', () => <Button
label="Do Something"
type="primary"
big
white
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
white
/>)

.add('Outline Danger', () => <Button
label="Do Something"
type="danger"
outline
/>)

.add('Gradient Danger', () => <Button
label="Do Something"
type="danger"
gradient
/>)

.add('Big Danger', () => <Button
label="Do Something"
type="danger"
big
white
/>)

.add('Big Outline Danger', () => <Button
label="Do Something"
type="danger"
outline
big
/>)

.add('Big Gradient Danger', () => <Button
label="Do Something"
type="danger"
gradient
big
/>)

.add('Success', () => <Button
label="Do Something"
type="success"
white
/>)

.add('Warning', () => <Button
label="Do Something"
type="warning"
white
/>)

.add('Default', () => <Button
label="Do Something"
type="button"
/>)