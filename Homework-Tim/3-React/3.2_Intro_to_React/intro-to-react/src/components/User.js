import Model from "./Model";
import "./User.css";

const User = ({ userData }) => {
  console.log(userData);

  return (
    <>
      {userData
        ? userData.map((singleUserData) => {
            return (
              <div>
                <div className="user">
                  <div className="info">
                    <p>{singleUserData.name}</p>
                    <p>{singleUserData.address.city}</p>
                    <a href={singleUserData.website}>
                      {singleUserData.website}
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default User;
