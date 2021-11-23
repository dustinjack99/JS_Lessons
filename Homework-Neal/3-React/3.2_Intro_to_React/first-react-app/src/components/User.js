const User = ({ data, userData }) => {
  return (
    <>
      <h1>
        Bugs that fly, creep and crawl <br />
        through the air and on the walls <br />
        Fang and Chitin, Shell and Bone, <br />
        Bulk Det Sighted! There she blows!
      </h1>
      <p>{data}</p>
      <p>{userData ? userData.toString() : ""}</p>
    </>
  );
};

export default User;
