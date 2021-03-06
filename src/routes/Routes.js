import UserLayout from "layouts/UserLayout/UserLayout";
import React, { Suspense, lazy } from "react";
import { Routes as Rts, Route } from "react-router-dom";
import InventoryRoutes from "./InventoryRoutes";
import Home from 'views/Home';
import Movements from 'views/Movements';
import Warehouse from 'views/Warehouse';
import Settings from 'views/Settings';
/* 
TODO agregar lazy -> Loader <- Suspense
const Home = lazy(() => import("views/Home"));
const Movements = lazy(() => import("views/Movements"));
const Settings = lazy(() => import("views/Settings"));
const Warehouse = lazy(() => import("views/Warehouse")); */

const Routes = () => {
  return (
    <Suspense fallback={<></>}>
      <UserLayout>
        <Rts>
          <Route path={"/"} element={<Home />} />
          <Route path={`inventory/*`} element={<InventoryRoutes />} />
          <Route path={`movements`} element={<Movements />} />
          <Route path={`warehouse`} element={<Warehouse />} />
          <Route path={`settings`} element={<Settings />} />
        </Rts>
      </UserLayout>
    </Suspense>
  );
};

export default Routes;
