import { useReducer } from "react";

// fancy logic to make sure the number is between 0 and 255
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

// before state: { r: 0, g: 0, b: 0}
// action: { type: "" }
// after state: { r: 0, g: 0, b: 0}

const reducer = (state, action) => {
  // Remember that you are returning a new object, and not affecting the old state.
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "DECREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "INCREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "DECREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "INCREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "DECREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <div className="mt-2 mb-2">
      <h1 className="bold text-3xl" style={{ color: `rgb(${r}, ${g}, ${b})` }}>
        useReducer Example
      </h1>
      <div>
        <span className="text-xl bold mx-5">R</span>
        <button
          className="align-middle rounded-full bg-lime-600 shadow-lg px-3 py-1 m-1 text-xl text-white hover:bg-lime-500"
          onClick={() => dispatch({ type: "INCREMENT_R" })}
        >
          +
        </button>
        <button
          className="align-middle rounded-full bg-red-600 shadow-lg px-3 py-1 m-1 text-xl text-white hover:bg-red-500"
          onClick={() => dispatch({ type: "DECREMENT_R" })}
        >
          -
        </button>
      </div>
      <div>
        <span className="text-xl bold mx-5">G</span>
        <button
          className="align-middle rounded-full bg-lime-600 shadow-lg px-3 py-1 m-1 text-xl text-white hover:bg-lime-500"
          onClick={() => dispatch({ type: "INCREMENT_G" })}
        >
          +
        </button>
        <button
          className="align-middle rounded-full bg-red-600 shadow-lg px-3 py-1 m-1 text-xl text-white hover:bg-red-500"
          onClick={() => dispatch({ type: "DECREMENT_G" })}
        >
          -
        </button>
      </div>
      <div>
        <span className="text-xl bold mx-5">B</span>
        <button
          className="align-middle rounded-full bg-lime-600 shadow-lg px-3 py-1 m-1 text-xl text-white hover:bg-lime-500"
          onClick={() => dispatch({ type: "INCREMENT_B" })}
        >
          +
        </button>
        <button
          className="align-middle rounded-full bg-red-600 shadow-lg px-3 py-1 m-1 text-xl text-white hover:bg-red-500"
          onClick={() => dispatch({ type: "DECREMENT_B" })}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ReducerComponent;
