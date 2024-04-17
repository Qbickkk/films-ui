import {FC} from 'react';
import {userService} from "@/services";
import {Posts} from "@/app/(main-layout)/users/[id]/posts/components/Posts";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: `UserPosts`
};

interface IProps {
params:{id:string}
}

const PostPageById: FC<IProps> = async ({params:{id}}) => {
    const {data} = await userService.getPosts(id);
    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default PostPageById;