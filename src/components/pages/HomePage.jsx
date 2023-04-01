import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../Image";
import ImageGallery from "../ImageGallery";
const ImageBanner = styled.div`
    background-image: url(${(props) => props.imageSrc});
    height: 800px;
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
const StyledImageContainer = styled.div`
    position: relative;
    &&::before {
        content: "";
        background-color: #00000042;
        inset: 0px;
        position: absolute;
        opacity: 0;
        transition: 0.3s ease all;
    }
    &&:hover::before {
        opacity: 1;
    }
    &&:hover > div {
        opacity: 1;
    }
`;
const PhotographerDetails = styled.div`
    position: absolute;
    z-index: 100;
    bottom: 30px;
    font-size: 20px;
    font-weight: 500;
    opacity: 0;
    transition: 0.3s ease opacity;
    color: white;
    padding: 0px 10px;
    && > * {
        margin: 5px;
    }
`;
const HomePage = () => {
    const [randomImage, setRandomImage] = useState(null);
    const [userData, setUserData] = useState(null);
    const [images, setImages] = useState([]);
    const getRandomImage = async () => {
        const query = `https://api.unsplash.com/photos/random?client_id=${
            import.meta.env.VITE_ACCESS_KEY
        }`;
        let data = await fetch(query);
        data = await data.json();
        console.log(data);
        const {
            urls: { full: image },
            user: { name },
            alt_description,
        } = data;
        setUserData({ alt_description, name });
        setRandomImage(image);
    };
    const getImages = async () => {
        const query = `https://api.unsplash.com/photos?page=1&client_id=${
            import.meta.env.VITE_ACCESS_KEY
        }&count=25`;
        let data = await fetch(query);
        data = await data.json();
        console.log(data);
        setImages(data);
    };
    useEffect(() => {
        getRandomImage();
        getImages();
    }, []);
    return (
        <>
            <StyledImageContainer>
                {randomImage && (
                    <Image url={randomImage} height="600px" width="100%" />
                )}
                <PhotographerDetails>
                    <p>{userData && userData.name}</p>
                    <p>{userData && userData.alt_description}</p>
                </PhotographerDetails>
            </StyledImageContainer>
            <ImageGallery images={images} />
        </>
    );
};

export default HomePage;
