import React from 'react';
import './Forms.css'

const Forms = (props) => {

    let classList = ''
    let header = ''

    if (props.header) {
        header += ` input.header`
    }

    if (props.medium) {
        classList += ` input-medium`
    }
    
    if (props.large) {
        classList += ` input-large`
    }

return <div>
    <div className={header} /*className={classList}*/>
    {props.label}
    </div>
    <div>    
    <input className={classList}
    placeholder="Email">
    </input>
    </div>
    </div>
}


export default Forms;