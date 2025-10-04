import React, { createContext, useState } from "react";

//create user context
const UserContext = createContext();

//create provider component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };
