import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RouteGuard from "./components/RouteGuard";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Nest from "./pages/Nest";
import Four from "./pages/Four";

const App = () => {
    return (
        <div className=" font-mon">
            <Routes>
                <Route
                    path="/"
                    element={
                        <RouteGuard>
                            <Dashboard></Dashboard>
                        </RouteGuard>
                    }
                >
                    <Route index element={<One />}></Route>
                    <Route path="two" element={<Two />}></Route>
                    <Route path="three" element={<Three />}></Route>
                    <Route path="four" element={<Four />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/nest" element={<Nest />}></Route>
            </Routes>
        </div>
    );
};

export default App;
