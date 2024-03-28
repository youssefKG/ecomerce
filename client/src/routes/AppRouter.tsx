import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
const Navbar = lazy(()=> import Navbar from "../components/Navbar";)
const AppRouter = () => {
  return( <Routes>
    <Navbar/>
    <Outlet/>
  </Routes>)
};
export default AppRouter
