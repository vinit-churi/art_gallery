import React, { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import useGetData from "./customHooks/useGetData";
import { context } from "../context/context";
const Layout = () => {
    const [fetchHomeData] = useGetData();
    const { setArtists } = useContext(context);
    useEffect(() => {
        fetchHomeData().then((data) => setArtists(data));
    }, []);
    return (
        <div className="LayoutRoot">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
