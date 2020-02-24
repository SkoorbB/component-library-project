import React from 'react';
import './Button.css'


const Button = (props) => {

    let classList = ''
    let types = ['primary', 'danger', 'gdanger', 'warning', 'gwarning', 'success', 'gsuccess', 'default', 'gdefault']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    if (props.white) {
        classList += ` button-white`
    }
    
    if (props.outline) {
        classList += ` button-outline`
    }

    if (props.big) {
        classList += ` button-big`
    }

    if (props.gradient) {
        classList += ` button-gradient`
    }   

    if (props.voucher) {
        classList += ` button-voucher`
    }

    return <button className={classList}
        src={props.icon}>
        {props.label}
        </button>
}

export default Button;