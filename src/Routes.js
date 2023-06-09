import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About"; 
import  NotFound from "./pages/NotFound"; 

const RoutesFunc = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>  

            <Route exact path="/about">
                <About/> 
            </Route>

            {/*Página não encontrada*/}
            <Route>
                <NotFound/>
            </Route>
        </Switch> 
    ) 
}

export default RoutesFunc;