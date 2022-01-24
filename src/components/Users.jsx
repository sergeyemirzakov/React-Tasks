import React from 'react';

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

  React.useEffect(() => {
    const getData = async () => {
      let responce = await fetch(DATA_USERS);
      let data = await responce.json();
      setUsers(data);
    };
    getData();
  }, [DATA_USERS]);

  const filterUsers = users.slice(0, count);

  const increment = () => {
    setCount((prev) => prev + 2);
  };

  return (
    <>
      <h1>Users component</h1>
      {filterUsers.map((u) => (
        <div key={u.id}>
          <span>{u.id}) </span>
          <span>{u.name}: </span>
          <span>{u.email}</span>
        </div>
      ))}
      {users.length > count ? (
        <button style={styles} onClick={increment}>
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
