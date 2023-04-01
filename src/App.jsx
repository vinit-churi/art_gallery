import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ContextProvider } from "./context/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/pages/HomePage";
import CategoryImages from "./components/CategoryImages";
import fetchCategoryImages from "./context/fetchCategoryImages";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/category/:categoryName",
                element: <CategoryImages />,
                loader: fetchCategoryImages,
            },
        ],
    },
    // {
    //     path: "/auth",
    //     element: <Auth />,
    // },
]);

function App() {
    const [count, setCount] = useState(0);

    return (
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    );
}

export default App;
