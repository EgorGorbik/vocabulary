import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router";
import Login from "./Login";
import Registration from "./Registration";
import Vocabulary from "./Vocabulary";

class Router extends Component {

    render() {
        return(
            <Switch>
                <Route exact path="/">
                   <Redirect to='/login'/>
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path="/registration">
                    <Registration/>
                </Route>
                <Route exact path="/vocabulary">
                    <Vocabulary/>
                </Route>
            </Switch>
        )
    }
}

export default Router;