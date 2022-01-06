import React, { lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
const Inventory = lazy(() => import("views/Inventory"));

const Test = () => {
  console.log("Test");
  return (
    <div>
      Holaaaa
    </div>
  );
};
//Inventory Layout?
const InventoryRoutes = () => {
  return (
    <>
      <Inventory />
      <Routes>
        <Route path={`:id`} element={<Test />} />
      </Routes>
    </>
  );
};

export default InventoryRoutes;
