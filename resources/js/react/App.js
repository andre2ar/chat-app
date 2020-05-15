import React, { Suspense, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Layout from "./containers/Layout/Layout";
import Spinner from "./components/Spinner/Spinner";

const Chat = React.lazy(() => import('./containers/Chat/Chat'));

import './App.css';

const App = props => {
    return (
        <Layout>
            <Suspense fallback={<Spinner/>}>
                <Route path="/" render={() => <Chat/> }/>
            </Suspense>
        </Layout>
    );
};

export default withRouter(App);
