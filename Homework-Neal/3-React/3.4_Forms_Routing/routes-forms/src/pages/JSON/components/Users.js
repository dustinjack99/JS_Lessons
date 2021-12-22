import UserAddress from "../UserAddress";
const Users = ({ allUsers }) => {
  return (
    <div>
      <h3>Users</h3>
      {allUsers.map((user) => {
        const { username, address, email, name } = user;

        return (
          <div>
            <h2>{username}</h2>
            {/* <p>{address}</p> */}
            <UserAddress {...address} />
            <p>{email}</p>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
