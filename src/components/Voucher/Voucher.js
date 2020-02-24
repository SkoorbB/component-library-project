import React from 'react'
import Forms from '../Forms/Forms';
import Button from '../Button/Button'
import './Voucher.css'

const Voucher = (props) => {

    let classList=''

    if (props.flex) {
        classList += ` flex`
    }

    if (props.large) {
        classList += ` large`
    }

if (props.flex) {
    return <div className={classList}>
    <Forms
    placeholder="Voucher Code"
    medium
    voucher
    />
    <Button 
    type="primary"
    label="Redeem"
    white
    voucher
    />
    </div>
    }

if (props.large) {
    return <div className={classList}>
    <Forms
    placeholder="Voucher Code"
    large
    />
    <Button 
    type="primary"
    label="Redeem"
    big
    white
    voucher
    />
    </div>
    }
}

export default Voucher;