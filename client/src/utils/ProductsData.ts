interface ProductType {
  title: string;
  description?: string;
  price: number;
  imgURL: string;
  discount: number;
  id: number;
}

const productsData: ProductType[] = [
  {
    id: 1,
    title: "Etagere",
    description: "Description of Product 1",
    price: 10.99,
    imgURL:
      "https://www.ikea.com/ext/ingkadam/m/23d41776febf815/original/PH195594.jpg?f=xs",
    discount: 0.1, // 10% discount
  },
  {
    id: 2,
    title: "Bilbliotheque",
    description: "Description of Product 2",
    price: 19.99,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/fejka-plante-artificielle-et-supp-mural-interieur-exterieur-vert-mauve__1184665_pe898020_s5.jpg?f=xxs",
    discount: 0.2, // 20% discount
  },
  {
    id: 3,
    title: "Decoration",
    description: "Description of Product 3",
    price: 15.5,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/fejka-plante-artificielle-et-supp-mural-interieur-exterieur-vert-mauve__1207875_pe908211_s5.jpg?f=xxxs",
    discount: 0, // No discount
  },
  {
    id: 4,
    title: "Cuilliere",
    description: "Description of Product 4",
    price: 25.0,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/hovsta-cadre-motif-bouleau__0902228_pe652821_s5.jpg?f=xxs",
    discount: 0.15, // 15% discount
  },
  {
    id: 5,
    title: "Presontoir",
    description: "Description of Product 5",
    price: 8.75,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/glattis-plateau-couleur-laiton__0896599_pe629566_s5.jpg?f=xxs",
    discount: 0.05, // 5% discount
  },
  {
    id: 6,
    title: "Cup",
    description: "Description of Product 6",
    price: 12.49,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/glattis-plateau-couleur-laiton__0685589_ph154666_s5.jpg?f=xxxs",
    discount: 0.2, // 20% discount
  },
  {
    id: 7,
    title: "Forshette",
    description: "Description of Product 7",
    price: 30.0,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs",
    discount: 0.25, // 25% discount
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description of Product 8",
    price: 9.99,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/glattis-dessous-de-verre-avec-support-couleur-laiton__0897425_pe629569_s5.jpg?f=xxxs",
    discount: 0.1, // 10% discount
  },
  {
    id: 9,
    title: "Product 9",
    description: "Description of Product 9",
    price: 18.25,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/tillgang-plateau-gris__1231059_pe915726_s5.jpg?f=xxxs",
    discount: 0.15, // 15% discount
  },
  {
    id: 10,
    title: "Product 10",
    description: "Description of Product 10",
    price: 22.99,
    imgURL:
      "https://www.ikea.com/ma/fr/images/products/mopsig-menagere-16-pieces__0897221_pe669395_s5.jpg?f=xxxs",
    discount: 0, // No discount
  },
];
export default productsData;
