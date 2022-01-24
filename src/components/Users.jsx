import React from 'react';
import CustomInput from './CustomInput';

const styles = {
  marginTop: '20px',
  display: 'inline-flex',
  padding: '10px',
  backgroundColor: 'deeppink',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const Users = () => {
  const DATA_USERS = `https://jsonplaceholder.typicode.com/users`;
  const [users, setUsers] = React.useState([]);
  const [count, setCount] = React.useState(2);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      let responce = await fetch(DATA_USERS);
      let data = await responce.json();
      setUsers(data);
    };
    getData();
  }, [DATA_USERS]);

  const filterUsers = users
    .slice(0, count)
    .filter((u) => u.name.toLowerCase().includes(value.toLowerCase()));

  return (
    <>
      <h1>Users component</h1>
      <CustomInput setValue={setValue} value={value} />
      {filterUsers.map((u) => (
        <div key={u.id}>
          <span>{u.id}) </span>
          <span>{u.name}: </span>
          <span>{u.email}</span>
        </div>
      ))}
      {users.length > count ? (
        <button style={styles} onClick={() => setCount((prev) => prev + 2)}>
          Show more
        </button>
      ) : (
        <button style={styles} disabled={true}>
          You have got all users
        </button>
      )}
    </>
  );
};

export default Users;
