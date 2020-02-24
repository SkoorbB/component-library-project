import React from 'react'
import './Check.css'

const Check = (props) => {

    let classList=''

    if (props.black) {
        classList += ` black`
    }

    return <button 
    type="checkbox" 
    checked="checked" 
    className={classList}>
        </button>

}

export default Check;