import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Buttons', module)

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
type="gprimary"
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
type="gdanger"
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
type="gdanger"
big
/>)

.add('Success', () => <Button
label="Do Something"
type="success"
white
/>)

.add('Outline Success', () => <Button
label="Do Something"
type="success"
outline
/>)

.add('Gradient Success', () => <Button
label="Do Something"
type="gsuccess"
/>)

.add('Big Success', () => <Button
label="Do Something"
type="success"
big
white
/>)

.add('Big Outline Success', () => <Button
label="Do Something"
type="success"
outline
big
/>)

.add('Big Gradient Success', () => <Button
label="Do Something"
type="gsuccess"
big
/>)

.add('Warning', () => <Button
label="Do Something"
type="warning"
white
/>)

.add('Outline Warning', () => <Button
label="Do Something"
type="warning"
outline
/>)

.add('Gradient Warning', () => <Button
label="Do Something"
type="gwarning"
/>)

.add('Big Warning', () => <Button
label="Do Something"
type="warning"
big
white
/>)

.add('Big Outline Warning', () => <Button
label="Do Something"
type="warning"
outline
big
/>)

.add('Big Gradient Warning', () => <Button
label="Do Something"
type="gwarning"
big
/>)

.add('Default', () => <Button
label="Do Something"
type="button"
white
/>)

.add('Outline Default', () => <Button
label="Do Something"
type="button"
outline
/>)

.add('Gradient Default', () => <Button
label="Do Something"
type="gdefault"
/>)

.add('Big Default', () => <Button
label="Do Something"
type="button"
big
white
/>)

.add('Big Outline Default', () => <Button
label="Do Something"
type="button"
outline
big
/>)

.add('Big Gradient Default', () => <Button
label="Do Something"
type="gdefault"
big
/>)