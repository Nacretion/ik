import React from 'react';

const CheckBox = ({id, disabled, children, ...props}) => {

    return (
        <div className={disabled? "styled-input-single styled-input-single--disabled" : "styled-input-single styled-input-single" }>
            <input {...props} disabled={!!disabled} type="checkbox" name={id} id={id}/>
            <label htmlFor={id}>{children}</label>
        </div>
    );
};

export default CheckBox;