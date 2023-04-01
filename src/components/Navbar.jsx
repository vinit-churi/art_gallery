import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImage from "../assets/logo/svgexport-27.svg";
import getCategories from "../context/categories";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
const Nav = styled.nav`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 90px;
    display: flex;
    padding: 0px 20px;
    align-items: center;
    gap: 20px;
`;
const Logo = styled.img.attrs({
    src: logoImage,
})`
    width: 200px;
    filter: invert();
`;
const NavItems = styled.ul`
    display: flex;
    gap: 15px;
    flex: 1 1 auto;
    padding: 0px;
    overflow-x: auto;
    && li {
        list-style: none;
        cursor: pointer;
        white-space: nowrap;
        padding: 10px 0px;
        // text-decoration: underline;
        & a {
            transition: 0.3s ease scale;
            color: black;
        }
    }

    scrollbar-width: auto;
    scrollbar-color: #000000 #ededed;

    /* Chrome, Edge, and Safari */
    &&::-webkit-scrollbar {
        height: 8px;
    }

    &&::-webkit-scrollbar-track {
        background: #ededed;
    }

    &&::-webkit-scrollbar-thumb {
        background-color: #000000;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }
    // &&::-webkit-scrollbar {
    //     width: 7px;
    //     height: 7px;
    //     background-color: #ddd;
    // }
    // &&::-webkit-scrollbar:hover {
    //     width: 10px;
    //     height: 10px;
    //     background-color: red;
    // }
`;
const ImageSearch = styled.input.attrs({
    type: "text",
    placeholder: "search image...",
})`
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    width: 20%;
    background: #f1f1f1;
`;
const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((data) => {
            data = data.map(({ id, title, description }) => ({
                id,
                title,
                description,
            }));
            console.log(data);
            setCategories(data);
        });
    }, []);
    return (
        <Nav>
            <Link to="/">
                <Logo />
            </Link>
            <ImageSearch />
            <NavItems>
                {categories.map((category) => {
                    return (
                        <li key={uuidv4()}>
                            <Link
                                to={`/category/${category.id}`}
                                state={{ description: category.description }}
                            >
                                {category.title}
                            </Link>
                        </li>
                    );
                })}
            </NavItems>
        </Nav>
    );
};

export default Navbar;
