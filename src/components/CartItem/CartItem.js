import "./CartItem.css";

export const CartItem = ({ name, price, quantity }) => {
  return (
    <article>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <section>
        <p className="info">Cantidad: {quantity}</p>
        <p className="info">Precio: ${price}</p>
        <p className="info">Subtotal: ${price * quantity}</p>
      </section>
    </article>
  );
};
