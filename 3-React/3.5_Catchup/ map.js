// Here's how .map() works:

const myArray = [0, 1, 2, 3, 4];

myArray.map(() => {});

<Results pets={pets} owners={owners} />;

const Results = ({ owners }) => {
  const [petYourPets, setPetYourPets] = useState(false);
  const [kickYourDog, setKickYourDog] = useState(false);

  useEffect(() => {
    //doing awesomestuff
  }, [kickYourDog]);

  return (
    <button onClick={() => setPetYourPets(!petYourPets)}>Pet Your Pet</button>
  );
};
