// import { PrismaClient, Category } from "@prisma/client";
// import { catchError } from "../handlers/errorHandler";
//
// interface NewProductType {
// 	title: string;
// 	price: number;
// 	discount: number;
// 	description: string;
// 	imgURLS: string[];
// 	rate: number;
// 	category: string;
// 	created_at: Date;
// }
// const client: PrismaClient = new PrismaClient();
// const products: NewProductType[] = [
// 	{
// 		title: "Modern Sofa",
// 		description: "A comfortable and stylish modern sofa.",
// 		imgURLS: [
// 			"https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
// 			"https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg",
// 		],
// 		price: 799,
// 		discount: 0.1,
// 		rate: 4.5,
// 		category: "Living Room",
// 		created_at: new Date("2023-01-01T12:00:00Z"),
// 	},
// 	{
// 		title: "Dining Table Set",
// 		description: "A beautiful dining table set for family meals.",
// 		imgURLS: [
// 			"https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
// 			"https://images.pexels.com/photos/1115805/pexels-photo-1115805.jpeg",
// 		],
// 		price: 999,
// 		discount: 0.15,
// 		rate: 4.7,
// 		category: "Dining Room",
// 		created_at: new Date("2023-02-15T08:30:00Z"),
// 	},
// 	{
// 		title: "Office Chair",
// 		description: "Ergonomic office chair for maximum comfort.",
// 		imgURLS: [
// 			"https://images.pexels.com/photos/370024/pexels-photo-370024.jpeg",
// 			"https://images.pexels.com/photos/370021/pexels-photo-370021.jpeg",
// 		],
// 		price: 199,
// 		discount: 0.05,
// 		rate: 4.3,
// 		category: "Office",
// 		created_at: new Date("2023-03-10T14:20:00Z"),
// 	},
// 	{
// 		title: "Queen Bed Frame",
// 		description: "Sturdy and stylish queen bed frame.",
// 		imgURLS: [
// 			"https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
// 			"https://images.pexels.com/photos/1457843/pexels-photo-1457843.jpeg",
// 		],
// 		price: 499,
// 		discount: 0.2,
// 		rate: 4.6,
// 		category: "Bedroom",
// 		created_at: new Date("2023-04-05T10:15:00Z"),
// 	},
// 	{
// 		title: "Bookshelf",
// 		description: "Spacious bookshelf with multiple shelves.",
// 		imgURLS: [
// 			"https://images.pexels.com/photos/276647/pexels-photo-276647.jpeg",
// 			"https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg",
// 		],
// 		price: 149,
// 		discount: 0,
// 		rate: 4.2,
// 		category: "Living Room",
// 		created_at: new Date("2023-05-20T16:45:00Z"),
// 	},
// ];
//
// async function main(): Promise<void> {
// 	let arrOfPromises = [];
// 	for (let i = 0; i < products.length; i++) {
// 		arrOfPromises.push(
// 			new Promise((resolve, reject) => {
// 				resolve(
// 					client.product.create({
// 						data: products[i],
// 					}),
// 				);
// 			}),
// 		);
// 	}
// 	Promise.all(arrOfPromises)
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
//
// 	// const user = await client.user.create({
// 	// 	data: {
// 	// 		firstName: "youssef",
// 	// 		lastName: "youssef",
// 	// 		email: "yousseftaoussi@gmail.com",
// 	// 		imgURL: "test",
// 	// 		adress: "test ",
// 	// 		role: "ADMIN",
// 	// 		isLogin: false,
// 	// 		password: "test",
// 	// 		salt: "test",
// 	// 	},
// 	// });
// 	// console.log(user);
// }
//
// export default main;

// const insertProducts = async () => {
//   try {
//     const products = await client.product.createMany({
//       data: [
//         {
//           name: "Product A",
//           description: "Description of Product A",
//           imgURLS: ["url1", "url2"],
//           price: 100,
//           discount: 0.1,
//           rate: 4.5,
//           categoryId: "66896d60d1cd8df58c8fa6d0",
//           created_at: "2024-07-06T12:00:00Z",
//           stock: 50,
//         },
//         {
//           name: "Product B",
//           description: "Description of Product B",
//           imgURLS: ["url3", "url4"],
//           price: 80,
//           discount: 0.05,
//           rate: 4.0,
//           categoryId: "66896d60d1cd8df58c8fa6d0",
//           created_at: "2024-07-06T12:30:00Z",
//           stock: 30,
//         },
//         {
//           name: "Product C",
//           description: "Description of Product C",
//           imgURLS: ["url5"],
//           price: 120,
//           discount: 0,
//           rate: 4.8,
//           categoryId: "66896d60d1cd8df58c8fa6d0",
//           created_at: "2024-07-06T13:00:00Z",
//           stock: 20,
//         },
//       ],
//     });
//     console.log("product is inserted");
//   } catch (err) {
//     console.log(err);
//   }
// };

// const insertCategory = async () => {
//   try {
//     const category = await client.category.createMany({
//       data: [
//         {
//           name: "cat 1",
//         },
//         {
//           name: "cat 2",
//         },
//       ],
//     });
//     console.log("inserted successfylly ");
//   } catch (err) {
//     console.log(err);
//   }
// };
// export { insertCategory, insertProducts };
