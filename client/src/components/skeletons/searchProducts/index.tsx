import { Divider, Skeleton } from "@mui/material";

const ProductsSearchSkeletons = () => {
  return Array(6)
    .fill(0)
    .map((_, i: number) => (
      <>
        <div
          key={i}
          className="flex p-1  gap-4 text-center items-center hover:bg-white transition-all "
        >
          <Skeleton variant="rounded" width={45} height={45} />
          <Skeleton variant="text" width={120} height={4} />
        </div>
        <Divider />
      </>
    ));
};

export default ProductsSearchSkeletons;
