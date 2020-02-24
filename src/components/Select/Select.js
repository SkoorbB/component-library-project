import React from 'react';
import './Select.css'

const Select = (props) => {

    let classList=''

    if (props.outline) {
        classList += ` outline`
    }

    return <div className={classList}>
          <label>{props.label}</label>
        <select>
    <option></option>
        </select>
    </div>
}



export default Select;