import React, { useContext } from "react";
import { context } from "../../context/context";
import { v4 as uuidv4 } from "uuid";
const HomePage = () => {
    const { artists } = useContext(context);
    console.log(artists);
    return (
        <div>
            {artists &&
                artists.map((artist) => (
                    <div key={uuidv4()}>{JSON.stringify(artist)}</div>
                ))}
        </div>
    );
};

export default HomePage;
