import {FC} from 'react';

import {IUser} from "@/interfaces";
import {User} from "@/app/(main-layout)/users/components/User";

interface IProps {
    users: IUser[]
}

const Users: FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};