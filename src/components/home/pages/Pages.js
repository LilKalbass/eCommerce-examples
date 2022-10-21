import React from 'react';
import {Header} from '../../common/Header';
import {Home} from '../Home';
import {Footer} from '../../common/Footer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export const Pages = () => {
    return (
        <>
            <div className = ""></div>
            <Router>
                <Header/>
                {/*    <Switch>*/}
                {/*        <Route exact path= '/' component = {Home}/>*/}
                {/*    </Switch>*/}
                {/*<Footer/>*/}
            </Router>
        </>
    );
}