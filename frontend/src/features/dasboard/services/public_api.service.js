import axios from "axios";

const publicApi = axios.create({
  baseURL: "import.meta.env.PUBLIC_URL",
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
