const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 1000,
    category: "celulares",
    description: "Telefono celular ultima gama",
    img: "https://e7.pngegg.com/pngimages/799/913/png-clipart-6-apple-cell-phone-iphone6-iphone-thumbnail.png",
    stock: "25",
  },
  {
    id: "2",
    name: "Vaio",
    price: 3000,
    category: "notebooks",
    description: "Notebook ultima gama",
    img: "https://e7.pngegg.com/pngimages/249/45/png-clipart-netbook-laptop-computer-notebook-miscellaneous-angle-thumbnail.png",
    stock: "30",
  },
  {
    id: "3",
    name: "Sony",
    price: 2000,
    category: "tablets",
    description: "Tablet ultima gama",
    img: "https://e7.pngegg.com/pngimages/461/995/png-clipart-tablet-tablet-thumbnail.png",
    stock: "15",
  },
  {
    id: "4",
    name: "Acer",
    price: 3000,
    category: "tablets",
    description: "Tablet ultima gama",
    img: "https://e7.pngegg.com/pngimages/461/995/png-clipart-tablet-tablet-thumbnail.png",
    stock: "15",
  },
  {
    id: "5",
    name: "Toshiba",
    price: 3500,
    category: "notebooks",
    description: "Notebook ultima gama",
    img: "https://e7.pngegg.com/pngimages/249/45/png-clipart-netbook-laptop-computer-notebook-miscellaneous-angle-thumbnail.png",
    stock: "30",
  },
  {
    id: "6",
    name: "Samsung s20",
    price: 1500,
    category: "celulares",
    description: "Telefono celular ultima gama",
    img: "https://e7.pngegg.com/pngimages/799/913/png-clipart-6-apple-cell-phone-iphone6-iphone-thumbnail.png",
    stock: "25",
  },
  {
    id: "7",
    name: "Samsung s21",
    price: 1500,
    category: "celulares",
    description: "Telefono celular ultima gama",
    img: "https://e7.pngegg.com/pngimages/799/913/png-clipart-6-apple-cell-phone-iphone6-iphone-thumbnail.png",
    stock: "25",
  },
  {
    id: "8",
    name: "Sony",
    price: 1500,
    category: "tablets",
    description: "Tablet samsung",
    img: "https://e7.pngegg.com/pngimages/461/995/png-clipart-tablet-tablet-thumbnail.png",
    stock: "25",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
