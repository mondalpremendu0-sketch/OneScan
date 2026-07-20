import axios from "axios";

const publicApi = axios.create({
  baseURL: "https://onescan-u1de.onrender.com",
  withCredentials: true,
});

export const getPublicProfile = async (username) => {
  
  try {
    const response = await publicApi.get(`/u/${username}`);
    
    return response.data;
  } catch (e) {
    throw e.response?.data || { message: e.message };
  }
};
