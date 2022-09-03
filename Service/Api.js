    import axios from 'axios';

    const usersUrl = 'http://localhost:3002/users';


    export const getUsers = async (id) => {
        id = id || '';
        try {
            return await axios.get(`${usersUrl}/${id}`);
        } catch (error) {
            console.log('Error while calling getUsers api ', error);
        }
    }

    export const add = async (user) => {
        return await axios.post(`${usersUrl}`, user);
    }

    export const deleteuser = async (id) => {
        return await axios.delete(`${usersUrl}/${id}`);
    }

    export const edit = async (id, user) => {
        return await axios.put(`${usersUrl}/${id}`, user)
    }
