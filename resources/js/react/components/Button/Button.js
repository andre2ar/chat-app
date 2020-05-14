import React from 'react';

import './Button.css';

const Button = ({onClick, children, type='submit'}) => {
    return (
        <button type={type} className='Button' onClick={onClick}>
            { children }
        </button>
    );
}

export default Button;
