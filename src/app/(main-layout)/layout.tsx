import {FC, PropsWithChildren} from 'react';

import {Header} from "@/app/(main-layout)/components/Header/Header";

interface IProps extends PropsWithChildren{

}

const Layout: FC<IProps> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;