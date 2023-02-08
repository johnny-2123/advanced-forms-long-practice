import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import { Home } from './Home'
import { Inventory } from './Inventory';
import { InventoryReport } from './InventoryReport';
import { SampleSurvey } from './SampleSurvey';


export const SurveyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <div>
                    <NavLink to='/home'> home </NavLink>
                    <NavLink to='/sample'> sample </NavLink>
                    <NavLink to='/inventory'> inventory </NavLink>
                    <NavLink to='/report'> report </NavLink>
                </div>
                <Switch>
                    <Route exact path="/sample">
                        <SampleSurvey />
                    </Route>
                    <Route exact path='/inventory'>
                        <Inventory />
                    </Route>
                    <Route exact path='/report'>
                        <InventoryReport />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
