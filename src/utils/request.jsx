import axios from 'axios';
import Status from './StatusCode';

const request = axios.create({
    baseURL: 'http://127.0.0.1:5000',
});

export const get = async (path, options = {}, headerOptions = {}) => {
    try {
        const response = await request.get(path, options, headerOptions).catch((err) => {
            throw err;
        });
        return response.data;
    } catch (err) {
        return { ...err.response.data, status: err.response.status };
    }
};

export const post = async (path, options = {}, headerOptions = {}) => {
    const response = await request.post(path, options, headerOptions);
    return response.data;
};

export const put = async (path, options = {}, headerOptions = {}) => {
    const response = await request.put(path, options, headerOptions);
    return response.data;
};

export const del = async (path, options = {}, headerOptions = {}) => {
    const response = await request.delete(path, options, headerOptions);
    return response.data;
};

export const patch = async (path, options = {}, headerOptions = {}) => {
    const response = await request.patch(path, options, headerOptions);
    return response.data;
};

export default { get, post, put, del, patch };
