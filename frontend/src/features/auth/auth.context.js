 import { createContext, useState , useEffect} from "react";


export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const [clerkUser, setClerkUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    return (
        <AuthContext.Provider value={{ clerkUser, setClerkUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
