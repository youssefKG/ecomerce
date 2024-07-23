import { Skeleton } from "@mui/material";

const TableSkeleton = () => {
  return (
    <tr className="text-left mx-2 font-semibold text-gray-500 text-sm  ">
      <td>
        <Skeleton variant="rectangular" width={10} height={10} />
      </td>
      <td className="flex gap-2 items-center ">
        <Skeleton variant="rectangular" width={45} height={40} />
        <Skeleton variant="text" width={60} height={10} />
      </td>
      <td>
        <Skeleton variant="text" width={40} height={10} />
      </td>
      <td className="flex gap-4 items-center">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text" width={20} height={10} />
        <Skeleton variant="circular" width={20} height={20} />
      </td>
      <td>
        <Skeleton variant="text" width={40} height={10} />
      </td>
      <td>
        <Skeleton variant="text" width={6} height={40} />
      </td>
    </tr>
  );
};

export default TableSkeleton;
