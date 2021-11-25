import "./User.css";
import bpArt from "../assets/bp-art.png";
const User = ({ userData }) => {
  console.log(userData);
  return (
    <>
      {userData
        ? userData.map((singleUserData, i) => {
            return (
              <div className="user">
                <div className="info">
                  <p>{singleUserData.name}</p>
                  <a href={singleUserData.website}>{singleUserData.website}</a>
                  <div>
                    <a href={singleUserData.email}>Email Me!</a>
                  </div>
                </div>
                <img src={bpArt} alt="bpArt" className="bpArt" />
              </div>
            );
          })
        : null}
    </>
  );
};

export default User;
