import React, { Suspense, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheckState } from "./store/actions";

import Layout from "./containers/Layout/Layout";
import Spinner from "./components/Spinner/Spinner";

const Chat = React.lazy(() => import('./containers/Chat/Chat'));

import './App.css';

const App = props => {
    const { onTryAutoSignup } = props;
    useEffect(() => {
        onTryAutoSignup();
    }, [onTryAutoSignup]);

    return (
        <Layout>
            <Suspense fallback={<Spinner/>}>
                <Route path="/" render={() => <Chat/> }/>
            </Suspense>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
