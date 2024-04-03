import { ReviewType } from "../types";
const reviewsData: ReviewType[] = [
  {
    id: 1,
    reviewerName: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 10,
    stars: 4,
    date: new Date("2024-03-30"),
  },
  {
    id: 2,
    reviewerName: "Alice Smith",
    description:
      "Nulla facilisi. Integer sit amet diam eleifend, venenatis est vel, feugiat purus.",
    likes: 5,
    stars: 3,
    date: new Date("2024-03-28"),
  },
  {
    id: 3,
    reviewerName: "Emily Johnson",
    description:
      "Sed euismod metus et eros efficitur, a fermentum mi volutpat.",
    likes: 15,
    stars: 5,
    date: new Date("2024-03-25"),
  },
  // Add more reviews as needed
];

export default reviewsData;
