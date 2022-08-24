import MemoCounts from "./MemoCounts";
import { useState, useEffect } from "react";

export default function ParentComponent() {
  const [cheeseType, setCheeseType] = useState("");
  const [wine, setWine] = useState("");
  const whichWineGoesBest = () => {
    switch (cheeseType) {
      case "MOZARELLA":
        return setWine("CABERNET");
      case "CHEDDAR":
        return setWine("CHARDONAY");
      case "PARMESAN":
        return setWine("MERLOT");
      default:
        return "CHARDONAY";
    }
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      whichWineGoesBest();
    }
    return () => (mounted = false);
  }, [cheeseType]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl text-center mt-2 mb-2">React.memo()</h3>
      <h1 className="font-semibold text-2xl dark:text-gray max-w-md text-center">
        Select a cheese and we will tell you which wine goes best!
      </h1>
      <div className="flex flex-col gap-4 mt-10">
        <button onClick={() => setCheeseType("MOZARELLA")}>MOZARELLA</button>
        <button onClick={() => setCheeseType("CHEDDAR")}>CHEDDAR</button>
        <button onClick={() => setCheeseType("PARMESAN")}>PARMESAN</button>
      </div>
      {cheeseType && (
        <p className="mt-5 dark:text-green-400 font-semibold">
          For {cheeseType}, <span className="dark:text-yellow-500">{wine}</span>{" "}
          goes best.
        </p>
      )}
      <MemoCounts />
    </div>
  );
}
