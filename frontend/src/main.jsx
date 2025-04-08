import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import Blog from "./view/Blog.jsx";
import Document from "./view/Document.jsx";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <App/>,
    // },
    {
        path: "*",
        Component: App,
        children: [
            {index: true, path: "blog", Component: Blog},
            {index: true, path: "document", Component: Document},
        ],
    },
]);

const container = document.getElementById('root')

// const root = createRoot(container)

// root.render(
//     <React.StrictMode>
//         <HydratedRouter/>
//     </React.StrictMode>
// )

ReactDOM.createRoot(container).render(
    <RouterProvider router={router}/>
);
