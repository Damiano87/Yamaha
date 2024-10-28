import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[120px]" />
      </div>
    </div>
  )
}


const MotocyclesListSkeleton = () => {
  return (
    <div className="z-[1] grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 mb-14">
      {[...Array(6)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default MotocyclesListSkeleton;