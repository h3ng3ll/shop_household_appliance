import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import "i18n/config";

import reportWebVitals from "reportWebVitals";
import { BrowserRouter} from "react-router-dom";

import AppRouter from "components/AppRouter";
import UserStore from "store/UserStore";
import DeviceStore from "store/DeviceStore";

export const PageContext = createContext("home");


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
interface UserContextType {
  user : UserStore  ;
  devices : DeviceStore  ; 
}


export const Context = createContext({} as UserContextType);

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    devices: new DeviceStore(),
  }} >
    <React.StrictMode>
    <BrowserRouter>
       <AppRouter/>
    </BrowserRouter>
 </React.StrictMode>
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
