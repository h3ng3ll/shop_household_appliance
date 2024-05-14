
import { Context } from "index";
import { useContext, useEffect, useState } from "react";
import { Route, Routes, } from "react-router-dom"
import {observer} from "mobx-react-lite"
import { publicRouters, authRoutes } from "routes"
import Home from "routes/Home/Home";
import { check } from "http/userApi";
import { ADMIN } from "utils/consts";
import { AdminUser } from "models/AdminUser";
import { CommonUser } from "models/CommonUser";
import { useTranslation } from "react-i18next";



const  AppRouter = observer (()=> {
    const { user } = useContext(Context)
    const [loading , setLoading] = useState(true)
    
    const {i18n} = useTranslation();

    if(localStorage.getItem("lng") && i18n.language !== localStorage.getItem("lng"))  i18n.changeLanguage("en")
    
    useEffect(() => {
        check().then(data => { 
           setTimeout(() => {
            if(!data) return 
             data = data as  Record<string , any> 
            if(((data)['role']) === ADMIN){
                user.setUser(AdminUser.fromJson(data))    
            } else {
                user.setUser(CommonUser.fromJson(data))    
            }
            user.setIsAuth(true);  
           })
        }).finally((() => {
            setLoading(false)
        }))
    } , [])
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
        });

export default AppRouter;