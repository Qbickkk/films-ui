import {FC} from 'react';

import {IPost} from "@/interfaces";
import {Post} from "@/app/(main-layout)/users/[id]/posts/components/Post";

interface IProps {
    posts:IPost[]
}

const Posts: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};