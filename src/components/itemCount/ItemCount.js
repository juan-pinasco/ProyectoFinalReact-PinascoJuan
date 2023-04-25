import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="buttonCount" onClick={decrement}>
          -
        </button>
        <h4 className="numberCount">{quantity}</h4>
        <button className="buttonCount" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="buttonCount"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
