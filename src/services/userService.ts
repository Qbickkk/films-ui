import {apiService} from "@/services/apiService";
import {IRes} from "@/types";
import {IPost, IUser} from "@/interfaces";
import {urls} from "@/constants";

const userService = {
    getAll: (): IRes<IUser[]> => apiService.get(urls.users.base),
    getPosts: (id: number | string): IRes<IPost[]> => apiService.get(urls.users.getPosts(id)),
};

export {
    userService
}