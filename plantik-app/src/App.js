import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { NavbarApp } from './components/ui/NavbarApp';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    return (
        <div>
            <NavbarApp />
            <AppRouter />
        </div>
    )
}
