import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, useParams } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import PhotoDetails from './components/PhotoDetails/PhotoDetails.jsx';
import HandleError from './components/HandleError/HandleError.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
      {
        index:true,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/photos'),
        Component:Home
      },
      {
        path:'photoDetails/:photoId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),
        Component:PhotoDetails
      },
      {path:'about',Component:About}
    ]
  },
  {
    path:'*',
    Component:HandleError
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
