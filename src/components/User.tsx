import { User } from "../lib/user"

function UserItem(user: User) {
    return (<>
        <ul>
            <li style={{ listStyle: 'none', display: 'inline' }}>{user.id}</li>
            <li style={{ listStyle: 'none', display: 'inline', paddingLeft: '10px' }}>{user.name}</li>
        </ul>
    </>)
}

export default UserItem