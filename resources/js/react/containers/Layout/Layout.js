import React from 'react';
import Toolbar from "../../components/Toolbar/Toolbar";

import './Layout.css';

const Layout = (props) => {
    return (
        <div className='Layout'>
            <Toolbar authenticated={false} />

            <main>
                { props.children }
            </main>
        </div>
    )
}

export default Layout;
