import { useEffect } from "react";
import { useState } from "react";

import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {<h1>{saludo}</h1>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
