import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Form from './pages/Form';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/form" component={Form} />
            </Switch>
        </BrowserRouter>
    )
}
