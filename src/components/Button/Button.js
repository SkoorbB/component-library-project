import React from 'react';
import './Button.css'

const Button = (props) => {

    let classList = ''
    let types = ['primary', 'danger', 'warning', 'success', 'default']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    return <button className={classList}>
        {props.label}
        </button>
}

export default Button;