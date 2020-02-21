import React from 'react';
import './OutlineButton.css'

const OutlineButton = (props) => {

    let classList = ''
    let types = ['outlineprimary', 'danger', 'warning', 'success', 'default']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    return <button className={classList}>
        {props.label}
        </button>
}

export default OutlineButton;