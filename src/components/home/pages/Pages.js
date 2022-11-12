import React from 'react';
import {Header} from '../../common/Header';
import {Home} from '../Home';
import {Details} from '../details/Details';
import {Footer} from '../../common/Footer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export const Pages = () => {
    return (
        <>
            <div className = ""></div>
            <Router>
                <Header/>
                    <Switch>
                        <Route exact path = '/'>
                            <Home/>
                        </Route>
                        <Route exact path = '/cart/:id'>
                            <Details/>
                        </Route>
                    </Switch>
                <Footer/>
            </Router>
        </>
    );
}