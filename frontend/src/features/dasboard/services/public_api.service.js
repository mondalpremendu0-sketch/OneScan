import axios from "axios";

const publicApi = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const getPublicProfile = async (username) => {
  
  try {
    const response = await publicApi.get(`/u/${username}`);
    console.log("res: ",response)
    return response.data;
  } catch (e) {
    throw e.response?.data || { message: e.message };
  }
};
