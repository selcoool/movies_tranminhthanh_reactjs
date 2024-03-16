import React from 'react'
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Header from '../components/Header';
import Error from '../components/Error';
import HomePage from '../pages/HomePage';

function useRouteCustom() {

    const routes=useRoutes([
      {
        path:"/",
        element:<HomePage/>,
      },
      // {
      // path:"/detail",
      // element:<Detail/>,
      // children:[
      //     {
      //       path:"dtdd",
      //       element:<DetailProduct/>
      //     },
      //     {
      //       path:"mt",
      //       element:<DetailProduct/>
      //     }
      // ]
      // },
      {
        path:"*",
        element:<Error/>
      }
  ])
  return  routes;
}

export default useRouteCustom
