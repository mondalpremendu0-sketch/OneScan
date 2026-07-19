import { useContext, useEffect } from "react";
import { PublicProfileContext } from '../contexts/publicProfile.context.jsx'
import { getPublicProfile } from "../services/public_api.service.js";

export function usePublicProfile(username) {
  
    const context = useContext(PublicProfileContext);
    if (!context) {
        throw new Error("usePublicProfile must be used within a PublicProfileProvider");
    }

    const { profile, setProfile, loading, setLoading, notFound, setNotFound } = context;
    
    useEffect(() => {
        if (!username) return;

        async function load() {
            try {
                setLoading(true);
                setNotFound(false);
                const res = await getPublicProfile(username);
                setProfile(res.data);
                
            } catch (e) {
                setNotFound(true);
            } finally {
                setLoading(false);
                
            }
        }

        load();
    }, [username]); // eslint-disable-line react-hooks/exhaustive-deps

    return { profile, loading, notFound };
}
