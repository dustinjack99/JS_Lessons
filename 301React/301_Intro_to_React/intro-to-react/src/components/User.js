const User = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <h2>I wonder if he means old Ben Kenobi?</h2>
      {userData
        ? userData.map((singleUserData) => {
            return (
              <>
                <p>{singleUserData.name}</p>
                <a href={singleUserData.website}>{singleUserData.website}</a>
                <div>
                  <a href={singleUserData.email}>Email Me!</a>
                </div>
              </>
            );
          })
        : null}
    </>
  );
};

export default User;
