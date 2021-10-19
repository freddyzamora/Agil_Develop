import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { SaleManagementScreen } from "../components/gestionVentas/SaleManagementScreen";
import { ProductRegistrationScreen } from "../components/registroProductos/ProductRegistrationScreen";
import { RegistroVentas } from "../components/registroVentas/RegistroVentas";
import { MasterProducts } from "../components/maestroProductos/MasterProducts";
import { HomeScreen } from "../components/home/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../actions/auth";
import { useEffect } from "react";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  //console.log(checking)

  if (checking) {
    return <h5>Loading</h5>;
  }

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={!!uid}
          />
          <PrivateRoute 
            exact 
            path="/"
            component={HomeScreen} 
            isAuthenticated={!!uid}
          />
          <Route
            exact
            path="/Registro-Productos"
            component={ProductRegistrationScreen}
          />
          <Route
            exact
            path="/Gestion-Ventas"
            component={SaleManagementScreen}
          />
          <Route exact path="/Registro-Ventas" component={RegistroVentas} />
          <Route exact path="/Maestro-Productos" component={MasterProducts} />
          {/* redireccionar si la ruta no es correcta a la raiz */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
