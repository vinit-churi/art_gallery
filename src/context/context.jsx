import { createContext, useState } from "react";
const context = createContext();
const ContextProvider = ({ children }) => {
    const [artists, setArtists] = useState(null);
    const [artWorks, setArtWorks] = useState(null);
    const value = {
        artists,
        setArtists,
        artWorks,
        setArtWorks,
    };
    return <context.Provider value={value}>{children}</context.Provider>;
};

export { ContextProvider, context };
