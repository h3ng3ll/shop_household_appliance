import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import "i18n/config";

import reportWebVitals from "reportWebVitals";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "routes/Home/Home";
import ErrorPage from "routes/ErrorPage";

export const PageContext = createContext("home");

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <PageContext.Provider value="/">
          <Home />
        </PageContext.Provider>
      }
      errorElement={<ErrorPage />}
    >
      {/* <Route
        path="home"
        element={
          <PageContext.Provider value="home">
            <Home />
          </PageContext.Provider>
        }
        errorElement={<ErrorPage />}
      />
      <Route
        path="shop"
        element={
          <PageContext.Provider value="shop">
            <Shop />
          </PageContext.Provider>
        }
        // action={(par, req) => {}}
        errorElement={<ErrorPage />}
      /> */}

      {/* <Route
        path="offers"
        element={
          <PageContext.Provider value="offers">
            <Offers />
          </PageContext.Provider>
        }
        errorElement={<ErrorPage />}
      /> */}
      {/* <Route
        path="contact"
        element={
          <PageContext.Provider value="contact">
            <Contact />
          </PageContext.Provider>
        }
        errorElement={<ErrorPage />}
      /> */}
      {/* <Route
        path="blog"
        element={
          <PageContext.Provider value="blog">
            <Blog />
          </PageContext.Provider>
        }
      /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {<RouterProvider router={router}></RouterProvider>}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
