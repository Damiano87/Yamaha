import { Skeleton } from "../ui/skeleton";


const CompareImagesSkeleton = () => {
  return (
    <div>
        {Array.from({ length: 4 }).map((_, index) => {
            return <Skeleton key={index} className="h-[400px] w-full" />
        }
    )}
        
    </div>
  )
}
export default CompareImagesSkeleton