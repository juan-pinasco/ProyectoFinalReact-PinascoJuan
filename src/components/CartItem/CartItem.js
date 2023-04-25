import "./CartItem.css";

export const CartItem = ({ name, img, price }) => {
  return (
    <article>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="info">Precio: ${price}</p>
      </section>
    </article>
  );
};
