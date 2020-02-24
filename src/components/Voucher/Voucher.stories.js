import React from 'react';
import { storiesOf } from '@storybook/react';
import Voucher from './Voucher'
import Forms from '../Forms/Forms';
import Button from '../Button/Button'

storiesOf('Voucher', module)

.add('Voucher', () => <Voucher 
flex
/>)

.add('Voucher Large', () => <Voucher 
large
/>)