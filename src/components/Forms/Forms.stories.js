import React from 'react';
import { storiesOf } from '@storybook/react';
import Forms from './Forms'

storiesOf('Forms', module)

.add('Forms Email', () => <Forms
label="Email"
/>)

.add('Forms Medium Email', () => <Forms
label="Email"
medium
/>)

.add('Forms Large Email', () => <Forms
label="Email"
medium
large
/>)
