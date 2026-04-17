import { useState } from "react";

const CartModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Cart</button>

      {open && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <button onClick={() => setOpen(false)}>X</button>
            <h3>My Cart</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;