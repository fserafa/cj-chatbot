import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './pages/Index';

export default function routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path='/' component={Index} />
            </Switch>
        </BrowserRouter>
    );
}
