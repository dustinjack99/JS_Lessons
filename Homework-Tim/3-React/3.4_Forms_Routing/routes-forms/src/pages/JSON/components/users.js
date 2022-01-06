const Users = ({allUsers}) => {
    return (
        <div>
            <h3>Users</h3>
            {allUsers.map((user, i) => {
                const {username, address, email, name} = user;

                return (
                    <div key={i}>
                        <h2>{username}</h2>
                        <p>{address}</p>
                        <p>{email}</p>
                        <p>{name}</p>
                    <div/>
                );
            })}
        </div>
    )
}

export default users
