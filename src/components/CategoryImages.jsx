import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import ImageGallery from "./ImageGallery";
const CategoryImages = () => {
    // const { categoryName } = useParams();
    const images = useLoaderData();

    useEffect(() => {
        console.log("is this running one");
    }, []);
    return (
        <div>
            <ImageGallery images={images} />
        </div>
    );
};

export default CategoryImages;
