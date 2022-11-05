import React from "react";

import './form-input.scss'

const FormInPut = (props) => {
    const { onChange, label, ...otherProps } = props;
    return (
        <div className="group">
            <input className="form-input" onChange={onChange} {...otherProps} />
            {label ?
                (<label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
                    {label}
                </label>)
                : null
            }
        </div>
    )
}

export default FormInPut;