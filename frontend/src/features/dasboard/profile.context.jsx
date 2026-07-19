import { createContext, useState } from "react";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [qrData, setQrData] = useState();
    const [errors, setErrors] = useState({
        profile: "",
        username: "",
        addLink: "",
        deleteLink: "",
        qr: ""
    });
    function setFieldError(field, message) {
        setErrors(prev => ({ ...prev, [field]: message }));
    }

    function clearFieldError(field) {
        setErrors(prev => ({ ...prev, [field]: "" }));
    }

    return (
        <ProfileContext.Provider
            value={{
                profile,
                setProfile,
                loading,
                setLoading,
                qrData,
                setQrData,
                errors,
                setFieldError,
                clearFieldError
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
}
