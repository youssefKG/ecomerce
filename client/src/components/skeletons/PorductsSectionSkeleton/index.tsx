import CardsSkeleton from "../card";

interface ICardsSectionSkeletonProps {
  cardsNumber: number;
}

const CardsSectionSkeleton = ({ cardsNumber }: ICardsSectionSkeletonProps) => {
  return (
    <div className="flex gap-4 flex-wrap w-full mx-auto">
      {Array(cardsNumber)
        .fill(0)
        .map((_: any, i: number) => (
          <CardsSkeleton key={i} />
        ))}
    </div>
  );
};

export default CardsSectionSkeleton;
