import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select'

storiesOf('Select', module)

.add('Main Select', () => <Select
label="Select"
outline
/>)