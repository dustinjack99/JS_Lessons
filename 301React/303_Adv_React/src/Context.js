import { useState, useContext, createContext } from "react";

const UserContext = createContext([
  {
    firstName: "",
    lastName: "",
    suffix: 0,
    email: "",
  },
  (obj) => obj,
]);

const LevelFive = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h5 className="text-sm">{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
      <button
        className="rounded-full bg-cyan-400 shadow-lg px-3 py-1 m-1 text-lg text-white hover:bg-cyan-300"
        onClick={() => {
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

const LevelFour = () => (
  <div>
    <h4 className="text-base">fourth level</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3 className="text-lg">third level</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2 className="text-xl">second level</h2>
    <LevelThree />
  </div>
);

const ContextComponent = () => {
  const userState = useState({
    firstName: "James",
    lastName: "Jameson",
    suffix: 1,
    email: "jamesjameson@example.com",
  });

  return (
    // TODO: Uncomment UserContext.Provider to pass values
    // to the lowest child component
    // <UserContext.Provider value={userState}>
    <div>
      <h1 className="bold text-3xl mt-2">useContext Example</h1>
      <div className="m5 p3 mb-2">
        <h1 className="text-2xl">first level</h1>
        <LevelTwo />
      </div>
    </div>
    // </UserContext.Provider>
  );
};

export default ContextComponent;
