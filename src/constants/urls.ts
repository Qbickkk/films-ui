const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';


const urls = {
    users: {
        base: users,
        getPosts: (id: string | number): string => `${users}/${id}/posts`,
    }
};

export {
    baseURL,
    urls
}