import axios from "axios";

const api = axios.create({
    baseURL: "https://one-scan-5odi.vercel.app",   // ← changed
    withCredentials: true,
});

export const  attachAuthToken = (getToken) => {
    api.interceptors.request.use(async config => {
        const token = await getToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
}

export const getMyProfile = async () => {
    try {
        const response = await api.get("/v1/api/profile/me/");
        return response.data;
        
    } catch (e) {
        throw new Error(e.message)
    }
};
export const updateLink = async (slug) => {
    try {
        const response = await api.put("/v1/api/profile/me/", { slug });
        return response.data;
        
    } catch (e) {
        throw new Error(e.message)
    }
};
export const addLink = async (title, url, platform) => {
    try {
        const response = await api.post("/v1/api/profile/me/addlink", {
            title,
            url,
            platform
        });
        
        return response.data;
    } catch (e) {
        throw new Error(e.message)
    }
};
export const deleteLink = async (linkId) => {
    try {
        const response = await api.delete(`/v1/api/profile/me/remove/${linkId}`);
        return response.data;
    } catch (e) {
        throw new Error(e.message)
    }
};
export const generateLink = async () => {

    try {
        const response = await api.get("/v1/api/profile/me/link");
        return response.data;
    } catch (e) {
        throw new Error(e.message)
    }
};
