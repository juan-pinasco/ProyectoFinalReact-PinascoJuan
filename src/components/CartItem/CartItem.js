import "./CartItem.css";

export const CartItem = ({ name, price, quantity }) => {
  return (
    <article className="cartContent">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <section className="cartContent">
        <p className="info">Cantidad: {quantity}</p>
        <p className="info">Precio: ${price}</p>
        <p className="info">Subtotal: ${price * quantity}</p>
      </section>
    </article>
  );
};
