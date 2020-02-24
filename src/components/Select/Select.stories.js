import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select'

storiesOf('Select', module)

.add('Main Outline Select', () => <Select
label="Select"
outline
/>)

.add('Main Outline Small Select', () => <Select
label="Select"
outline
small
/>)

.add('Main Outline Smaller Select', () => <Select
label="Select"
outline
smaller
/>)

.add('Main Filled Select', () => <Select
label="Select"
filled
/>)

.add('Main Filled Small Select', () => <Select
label="Select"
filled
small
/>)

.add('Main Filled Smaller Select', () => <Select
label="Select"
filled
smaller
/>)