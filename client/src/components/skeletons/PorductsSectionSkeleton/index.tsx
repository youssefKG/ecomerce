import CardsSkeleton from "../card";

const CardsSectionSkeleton = () => {
  return (
    <div className="flex gap-2 flex-wrap w-full  ">
      {Array(12)
        .fill(0)
        .map((_: any, i: number) => (
          <CardsSkeleton key={i} />
        ))}
    </div>
  );
};

export default CardsSectionSkeleton;
