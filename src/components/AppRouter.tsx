
import { Context } from "index";
import { useContext } from "react";
import { Route, Routes, } from "react-router-dom"

import { publicRouters, authRoutes } from "routes"
import Home from "routes/Home/Home";



export default function AppRouter() {
    const { user } = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {
                user?.isAuth ? authRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} Component={Component} />) : null
            }
            {
                publicRouters.map(({ path, Component }) =>
                    <Route key={path} path={path} Component={Component} />)
            }
            <Route path="*" element={<Home />} />
        </Routes>
    )
};