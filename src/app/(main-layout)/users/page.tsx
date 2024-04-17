import {FC} from 'react';

import {userService} from "@/services";
import {Users} from "@/app/(main-layout)/users/components";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: `Users`
};


interface IProps {

}

const UsersPage: FC<IProps> = async () => {
    const {data} = await userService.getAll();
    return (
        <div>
            <Users users={data}/>
        </div>
    );
};

export default UsersPage;