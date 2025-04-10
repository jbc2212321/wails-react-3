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
import DocumentEditor from "./view/DocumentEditor.jsx";
import Setting from "./view/Setting.jsx";

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
            {index: true, path: "document-editor", Component: DocumentEditor},
            {index: true, path: "setting", Component: DocumentEditor},
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
