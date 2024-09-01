interface CategoryFilter {
  beds: boolean;
  seating: boolean;
  tables: boolean;
  storage: boolean;
  decorations: boolean;
}

type FilterBy = {
  price: number[];
  rate: number[];
  categorys: any;
};

export type { FilterBy };
