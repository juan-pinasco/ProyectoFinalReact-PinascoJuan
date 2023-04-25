import { useContext, useState } from "react";
import { ItemCount } from "../itemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="CardItem2">
      <header className="Header2">
        <h2 className="ItemHeader2">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg2" />
      </picture>
      <section>
        <p className="info2">Categoria: {category}</p>
        <p className="info2">Descripcion: {description}</p>
        <p className="info2">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter2">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="activeOption">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};
