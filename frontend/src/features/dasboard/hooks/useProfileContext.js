import { useContext, useEffect } from "react";
import { useAuth } from "@clerk/react";
import { ProfileContext } from "../contexts/profile.context.jsx";
import {
    getMyProfile,
    updateLink,
    addLink,
    deleteLink,
    generateLink,
    attachAuthToken
} from "../services/api.service.js";

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }

    const {
        profile,
        setProfile,
        loading,
        setLoading,
        qrData,
        setQrData,
        errors,
        setFieldError,
        clearFieldError
    } = context;
    const { getToken } = useAuth();

    useEffect(() => {
        attachAuthToken(getToken);
    }, [getToken]);

    const fetchProfile = async () => {
        clearFieldError("profile");
        try {
            setLoading(true);
            const res = await getMyProfile();
            setProfile(res.data);
        } catch (e) {
            setFieldError(
                "profile",
                e.message || "Failed to reload your Profile!"
            );
        } finally {
            setLoading(false);
        }
    };

    const updateUsername = async slug => {
        clearFieldError("username");
        // --- client-side validation, before ever hitting the network ---
        const trimmed = (slug || "").trim().toLowerCase();

        if (!trimmed) {
            setFieldError("username", "Please enter a username");
            return false;
        }
        if (trimmed.length < 3 || trimmed.length > 30) {
            setFieldError("username", "Username must be 3–30 characters");
            return false;
        }
        if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(trimmed)) {
            setFieldError(
                "username",
                "Only lowercase letters, numbers, and hyphens allowed"
            );
            return false;
        }
        try {
            setLoading(true);
            const res = await updateLink(slug);
            setProfile(res.data);
            return true;
        } catch (e) {
            setFieldError(
                "username",
                e.message || "Failed to upadate username"
            );
            return false;
        } finally {
            setLoading(false);
        }
    };

    const addSocial = async (title, url, platform) => {
        clearFieldError("addLink");
        const trimmedUrl = (url || "").trim();

        if (!trimmedUrl) {
            setFieldError("addLink", "Please enter a URL");
            return false;
        }

        try {
            new URL(trimmedUrl);
        } catch {
            setFieldError(
                "addLink",
                "Please enter a valid URL (starting with https://)"
            );
            return false;
        }
        try {
            setLoading(true);
            const res = await addLink(title, url, platform);
            setProfile(res.data);
            return true;
        } catch (e) {
            setFieldError("addLink", e.message || "Failed to add Link");
            return false;
        } finally {
            setLoading(false);
        }
    };

    const removeLink = async linkId => {
        clearFieldError("deleteLink")
        try {
            setLoading(true);
            const res = await deleteLink(linkId);
            setProfile(res.data);
            return true;
        } catch (e) {
            setFieldError("deleteLink",e.message || "Failed to remove Link");
            return false;
        } finally {
            setLoading(false);
        }
    };

    const getMyLink = async () => {
      clearFieldError("qr")
        try {
            setLoading(true);
            const res = await generateLink();
            setQrData(res.data);
            return res.data;
        } catch (e) {
            setFieldError("qr",e.message || "Failed to generate link");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        fetchProfile,
        updateUsername,
        addSocial,
        removeLink,
        getMyLink,
        profile,
        qrData,
        loading,
        errors
    };
};
