import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const StyledImage = styled.img.attrs((props) => ({
    src: props.src,
    onLoad: props.onLoad,
}))`
    width: ${({ width }) => width};
    display: ${(props) => (props.loading === "true" ? "none" : "block")};
    height: ${({ height }) => height};
    object-fit: cover;
`;
const Image = ({ url, height, width }) => {
    const [loading, setLoading] = useState(true);
    const onLoadComplete = () => {
        setLoading(false);
    };
    return (
        <>
            {loading && <Skeleton height={height} />}
            <StyledImage
                loading={loading.toString()}
                height={height}
                src={url}
                onLoad={onLoadComplete}
                width={width}
            />
        </>
    );
};

export default Image;
