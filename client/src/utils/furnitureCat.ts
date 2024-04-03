import { FurnitureCategoryType } from "../types";
const furnitureCategories: FurnitureCategoryType[] = [
  {
    categoryName: "Chairs",
    items: [
      { id: 1, name: "Armchair" },
      { id: 2, name: "Dining Chair" },
      { id: 3, name: "Recliner" },
      { id: 4, name: "Accent Chair" },
      { id: 5, name: "Office Chair" },
    ],
  },
  {
    categoryName: "Tables",
    items: [
      { id: 6, name: "Coffee Table" },
      { id: 7, name: "Dining Table" },
      { id: 8, name: "Side Table" },
      { id: 9, name: "Console Table" },
      { id: 10, name: "End Table" },
    ],
  },
  {
    categoryName: "Sofas",
    items: [
      { id: 11, name: "Sectional Sofa" },
      { id: 12, name: "Sleeper Sofa" },
      { id: 13, name: "Loveseat" },
      { id: 14, name: "Chesterfield Sofa" },
      { id: 15, name: "Chaise Lounge" },
    ],
  },
  {
    categoryName: "Beds",
    items: [
      { id: 16, name: "King Size Bed" },
      { id: 17, name: "Queen Size Bed" },
      { id: 18, name: "Single Bed" },
      {
        id: 19,
        name: "Platform Bed",
      },
      { id: 20, name: "Storage Bed" },
    ],
  },
  {
    categoryName: "Desks",
    items: [
      { id: 21, name: "Writing Desk" },
      { id: 22, name: "Computer Desk" },
      { id: 23, name: "Corner Desk" },
      { id: 24, name: "Standing Desk" },
      { id: 25, name: "Executive Desk" },
    ],
  },
];

export default furnitureCategories;
