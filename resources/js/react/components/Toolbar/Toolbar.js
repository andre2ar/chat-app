import React from "react";

import './Toolbar.css';

import logo from '../../assets/images/logo.png';

const Toolbar = () => {
    return (
        <header className='Toolbar'>
            <div className='Logo'>
                <img src={logo} alt='Logo'/>
                ChatApp
            </div>
        </header>
    );
};

export default Toolbar;
