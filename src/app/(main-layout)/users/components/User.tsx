import {FC} from 'react';

import {IUser} from "@/interfaces";
import Link from "next/link";

interface IProps {
    user:IUser
}

const User: FC<IProps> = ({user}) => {

    const {id,name,username,email} = user;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <Link href={`users/${id}/posts`}>Posts</Link>
            <br/>
            <br/>
        </div>
    );
};

export {User};