import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return req;
});

export const fetchGroups = () => API.get('/group');
export const createGroup = (newGroup) => API.post('/group/create-group', newGroup);
export const getGroupDetails = (groupId) => API.get(`/group/${groupId}`);
export const addUserToGroup = (groupId, userId) => API.post('/group/add-user', { groupId, userId });
export const removeUserFromGroup = (groupId, userId) => API.post('/group/remove-user', { groupId, userId });
export const deleteGroup = (groupId) => API.delete(`/group/${groupId}`);
