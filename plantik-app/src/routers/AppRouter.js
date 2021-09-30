import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { SaleManagementScreen } from '../components/gestionVentas/SaleManagementScreen';
import { ProductRegistrationScreen } from '../components/registroProductos/ProductRegistrationScreen';
import { RegistroVentas } from '../components/registroVentas/RegistroVentas'; 

export const AppRouter = () => {
    return (
    <Router>
        <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/" component={ LoginScreen } />
                <Route exact path="/Registro-Productos" component={ ProductRegistrationScreen } />
                <Route exact path="/Gestion-Ventas" component={ SaleManagementScreen } />
                <Route exact path="/Registro-Ventas" component={ RegistroVentas } />
                {/* redireccionar si la ruta no es correcta a la raiz */}
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
    )
}
