import { createContext, useState } from "react";

export const PublicProfileContext = createContext();

export function PublicProfileProvider({ children }) {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    return (
        <PublicProfileContext.Provider
            value={{
                profile,
                setProfile,
                loading,
                setLoading,
                notFound,
                setNotFound
            }}
        >
            {children}
        </PublicProfileContext.Provider>
    );
}
