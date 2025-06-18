import { memo } from "react";

function Wishlist() {
  return (
    <div>
      <h1>Wishlist</h1>
      <p>Here you can view your wishlist items.</p>
      {/* Add wishlist items here */}
    </div>
  );
}

export default memo(Wishlist);