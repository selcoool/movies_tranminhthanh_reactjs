import React from 'react'
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Header from '../components/Header';
import Error from '../components/Error';
import HomePage from '../pages/HomePage';
import ManagementPage from '../pages/ManagementPage';
import DetailPage from '../pages/DetailPage';

function useRouteCustom() {

    const routes=useRoutes([
      {
        path:"/",
        element:<HomePage/>,
      },
      {
        path:"/detail/:tenPhim",
        element:<DetailPage/>
      },
      {
        path:"/management",
        element:<ManagementPage/>,
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
