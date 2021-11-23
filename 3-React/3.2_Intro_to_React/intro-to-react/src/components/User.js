const User = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <h2>I wonder if he means old Ben Kenobi?</h2>
      {userData.map((singleUserData, i) => {
        return (
          <p key={i}>
            {singleUserData.name +
              " " +
              singleUserData.username +
              " " +
              singleUserData.website}
          </p>
        );
      })}
    </>
  );
};

export default User;
