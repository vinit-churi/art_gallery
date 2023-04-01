import React from "react";
import Image from "./Image";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
const Gallery = styled.div`
    display: flex;
    gap: 10px;
    width: 90%;
    margin: 20px auto;
`;
const Columns = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & img {
        border-radius: 10px;
    }
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
const ImageGallery = ({ images }) => {
    return (
        <Gallery>
            <Columns>
                {images.slice(0, 3).map((image) => {
                    return (
                        <StyledImageContainer key={uuidv4()}>
                            <Image
                                url={image?.urls?.regular}
                                width="100%"
                                height="auto"
                            />
                            <PhotographerDetails>
                                <p>{image?.user?.username}</p>
                                <p>{image?.user?.name}</p>
                            </PhotographerDetails>
                        </StyledImageContainer>
                    );
                })}
            </Columns>
            <Columns>
                {images.slice(3, 7).map((image) => {
                    return (
                        <StyledImageContainer key={uuidv4()}>
                            <Image
                                url={image?.urls?.regular}
                                width="100%"
                                height="auto"
                            />
                            <PhotographerDetails>
                                <p>{image?.user?.username}</p>
                                <p>{image?.user?.name}</p>
                            </PhotographerDetails>
                        </StyledImageContainer>
                    );
                })}
            </Columns>
            <Columns>
                {images.slice(7, 10).map((image) => {
                    return (
                        <StyledImageContainer key={uuidv4()}>
                            <Image
                                url={image?.urls?.regular}
                                width="100%"
                                height="auto"
                            />
                            <PhotographerDetails>
                                <p>{image?.user?.username}</p>
                                <p>{image?.user?.name}</p>
                            </PhotographerDetails>
                        </StyledImageContainer>
                    );
                })}
            </Columns>
        </Gallery>
    );
};

export default ImageGallery;
