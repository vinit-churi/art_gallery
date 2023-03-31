import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ContextProvider } from "./context/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ArtistPage from "./components/pages/ArtistsPage";
import ArtWorkPage from "./components/pages/ArtWorkPage";
import GalleriesPage from "./components/pages/GalleriesPage";
import HomePage from "./components/pages/HomePage";
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
                path: "/artists",
                element: <ArtistPage />,
            },
            {
                path: "/artworks",
                element: <ArtWorkPage />,
            },
            {
                path: "/galleries",
                element: <GalleriesPage />,
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
