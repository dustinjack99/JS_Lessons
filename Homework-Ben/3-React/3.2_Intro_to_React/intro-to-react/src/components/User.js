import "./User.css";
const User = ({ userData }) => {
  console.log(userData);
  return (
    <>
      {userData
        ? userData.map((singleUserData, i) => {
            return (
              <div className="user">
                <p>{singleUserData.name}</p>
                <a href={singleUserData.website}>{singleUserData.website}</a>
                <div>
                  <a href={singleUserData.email}>Email Me!</a>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default User;
