import { createContext, useState } from "react";
const context = createContext();
const ContextProvider = ({ children }) => {
    const value = { isLoggedIn: false };
    return <context.Provider value={value}>{children}</context.Provider>;
};

export { ContextProvider, context };
