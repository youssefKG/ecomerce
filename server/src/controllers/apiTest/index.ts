import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
async function createProduct() {
  try {
    await client.product.create({
      data: {
        title: "best product",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        price: 200,
        discount: 20,
        imgURLS: [],
        rate: 4.5,
        categorie: "electronics",
        reviews: 12.5,
      },
    });
    console.log("product created ");
  } catch (err) {
    console.log(err);
  }
}
