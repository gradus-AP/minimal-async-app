import { FC, useState } from 'react';
import { User, getUsersAsync } from "./lib/user";

function UserItem(user: User) {
  return (<>
    <ul>
      <li style={{ listStyle: 'none', display: 'inline' }}>{user.id}</li>
      <li style={{ listStyle: 'none', display: 'inline', paddingLeft: '10px' }}>{user.name}</li>
    </ul>
  </>)
}

// 読み込み状態を属性に追加
const UsersResult: FC<{ users: User[] | null, loding: Boolean }> = (props) => {
  const { users, loding } = props
  if (loding) return (<p>Loding...</p>)
  if (!users) return (<p>no users</p>)
  return (<>
    <div>
      {users.map((user: User) => <UserItem key={user.id} {...user} />)}
    </div>
  </>)
}

function App() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const clickHandler = () => {
    setLoading(true)
    getUsersAsync().then(setUsers).then(() => setLoading(false))
  }

  return (
    <div className="App">
      <div style={{ width: '50%', margin: '0 auto', paddingTop: '100px' }}>
        <div>
          <button onClick={clickHandler}>get users</button>
        </div>
        <UsersResult users={users} loding={loading}/>
      </div>

    </div>
  );
}

export default App;
