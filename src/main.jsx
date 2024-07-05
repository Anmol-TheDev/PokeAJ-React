import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainPage from '../component/pokeCard.jsx'
import './index.css'
import PokeDetail from '../component/pokeDetail.jsx'
import { BrowserRouter,createBrowserRouter,Route,Router,RouterProvider, Routes } from 'react-router-dom'
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/pokemon",
        element:<PokeDetail/>
    }
   
]);
ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
  
)
