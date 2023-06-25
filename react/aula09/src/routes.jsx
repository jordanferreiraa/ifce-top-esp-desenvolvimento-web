import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyNavBar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import MyUser from "./pages/user"
import EditUser from "./pages/user/edit";

export default function RoutesApp() {
  return(
    <div>
      <BrowserRouter>

        <MyNavBar/>

        <Routes>
          <Route path="/" element={ <Dashboard/> } />
          <Route path="/user" element={ <MyUser/> } />
          <Route path="/editUser" element={ <EditUser/> } />
        </Routes>

      </BrowserRouter>
    </div>
  )
}