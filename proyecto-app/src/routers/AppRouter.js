import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { SaleManagementScreen } from '../components/sales/SaleManagementScreen';

export const AppRouter = () => {
    return (
    <Router>
        <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route exact path="/" component={ SaleManagementScreen } />
                {/* redireccionar si la ruta no es correcta a la raiz */}
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
    )
}
