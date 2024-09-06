import axios, { AxiosRequestConfig } from "axios";
import { std } from "./std";

const api = axios.create({
    baseURL: std.isDevelopment ? 'http://localhost:8083/' : '/',
    // baseURL:'/',
    // timeout: 10000,
    withCredentials: true,
});

export const API = {
    user_id: 353
}



const axiosGet = async (url: string, params?: any, config?: AxiosRequestConfig) => {
    try {
        return await api.get(url, { params, ...config });

    } catch (error) {
        throw error;
    }
};

const axiosPost = async (url: string, data?: object, config?: object) => {
    try {
        return await api.post(url, data, config);
    } catch (error) {
        throw error;
    }
};

export { api, axiosGet, axiosPost };

