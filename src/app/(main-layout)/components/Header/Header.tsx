import Link from "next/link";

import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            <Link href={'/users'}>Users</Link>
            <Link href={'/posts'}>Posts</Link>
        </div>
    );
};

export {Header};