import React, { useRef, useState } from "react";
function MemoCounts() {
  const [user, setUser] = useState(0);
  const renderCount = useRef(0);
  return (
    <div className="mt-3">
      <p className="dark:text-gray">
        Nothing has changed here but I've now rendered:{" "}
        <span className="dark:text-green-600 text-grey-900">
          {renderCount.current++} time(s)
        </span>
      </p>
      <button onClick={() => setUser(user)}>Increment</button>
      <p>{user}</p>
    </div>
  );
}

// TODO: Uncomment React.memo() to memoize the child component.
// Remember! React.memo() is for components only :)
// export default React.memo(MemoCounts);
export default MemoCounts;
