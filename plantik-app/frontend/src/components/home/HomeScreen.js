import React from "react";
import { NavbarApp } from '../ui/NavbarApp';
import { ListaProductos } from "./ListaProductos";

export const HomeScreen = () => {
  // console.log(productos)
  return (
    <>
        <NavbarApp />
        <h1 className="text-center mt-5" >Home</h1>
        <ListaProductos/>
        
    </>
  );
};
