import React, { useRef } from "react";
function MemoCounts() {
  const renderCount = useRef(0);
  return (
    <div className="mt-3">
      <p className="dark:text-gray">
        Nothing has changed here but I've now rendered:{" "}
        <span className="dark:text-green-600 text-grey-900">
          {renderCount.current++} time(s)
        </span>
      </p>
    </div>
  );
}
// export default React.memo(MemoCounts);
export default MemoCounts;
