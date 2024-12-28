import { commonAPI } from "./commonAPI";
import { Server_url } from "./Server_url";

// Upload video API
export const uploadVideoAPI = async (video) => {
    return await commonAPI("POST", `${Server_url}/allVideos`, video);
};

// Get all videos API
export const getALLVideoAPI = async () => {
    return await commonAPI("GET", `${Server_url}/allVideos`, "");
};

// Get a single video API
export const getAVideoAPI = async (id) => {
    return await commonAPI("GET", `${Server_url}/allVideos/${id}`, "");
};

// Delete a video API
export const deleteVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${Server_url}/allVideos/${id}`, {});
};

// Add to history API
export const addHistoryAPI = async (video) => {
    return await commonAPI("POST", `${Server_url}/history`, video);
};

// Get history API
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${Server_url}/history`, "");
};

// Delete from history API
export const deleteHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${Server_url}/history/${id}`, {});
};

// Add to category API
export const addCategoryAPI = async (category) => {
    return await commonAPI("POST", `${Server_url}/category`, category);
};

// get to category API
export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${Server_url}/category`, "");
};

// delete category
export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${Server_url}/category/${id}`,{});
};

export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${Server_url}/category/${id}`,categoryDetails)
}