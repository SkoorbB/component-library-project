import React from 'react';
import './Button.css'

const Button = (props) => {

    let classList = ''
    let types = ['primary', 'danger', 'warning', 'success', 'default']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    if (props.outline) {
        classList += ` button-outline`
    }

    if (props.gradient) {
        classList += ` button-gradient`    
    }

    if (props.big) {
        classList += ` button-big`
    }

    return <button className={classList}>
        {props.label}
        </button>
}

export default Button;