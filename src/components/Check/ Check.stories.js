import React from 'react';
import { storiesOf } from '@storybook/react';
import Check from './Check'

storiesOf('Check', module)

.add('Black Check', () => <Check
black

/>)