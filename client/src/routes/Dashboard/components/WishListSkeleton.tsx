import { Skeleton } from "@/components/ui/skeleton"


const WishListSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Skeleton className="bg-neutral-400 w-full h-60 md:h-80" />
        <Skeleton className="bg-neutral-400 w-full h-60 md:h-80" />
        <Skeleton className="bg-neutral-400 w-full h-60 md:h-80" />
    </div>
  )
}
export default WishListSkeleton