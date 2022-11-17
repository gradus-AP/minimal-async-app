import { FC, useEffect, useState } from 'react';
import { User, getUsersAsync } from "../lib/user"
import UserItem from './User';

// 読み込み状態を属性に追加
const UsersResult: FC = () => {

    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        setLoading(true)
        getUsersAsync().then(setUsers).then(() => setLoading(false))
    }, [])

    if (loading) return (<p>Loding...</p>)
    if (!users) return (<p>no users</p>)
    return (<>
        <div>
            {users.map((user: User) => <UserItem key={user.id} {...user} />)}
        </div>
    </>)
}

export default UsersResult