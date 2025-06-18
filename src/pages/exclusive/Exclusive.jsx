import { memo } from "react";

function Exclusive() {
  return (
    <div>
      <h1>Exclusive Page</h1>
      <p>This is the exclusive page content.</p>
    </div>
  );
}

export default memo(Exclusive);