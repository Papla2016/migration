import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "@/routes/home/Home.tsx";
import MapPage from "@/routes/map/MapPage";
import Tariff from "@/routes/tariffs/TariffPage";
import Header from './components/Header';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/map",
        element: <MapPage/>
    },
    {
        path: "/tariffs",
        element: <Tariff/>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
