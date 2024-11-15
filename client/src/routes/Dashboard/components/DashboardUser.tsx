import { useAuth } from "@/hooks/useAuth"


const DashboardUser = () => {
    const {username, isActive} = useAuth();
    
  return (
    <div className="mb-5">
      <h1 className="text-[1.5rem] font-semibold">{username}</h1>
      <h2 className="text-[1.5rem] font-semibold">Status: <span className={`${isActive ? "text-lime-600" : "text-red-600"} `}>{isActive ? 'Active' : 'Inactive'}</span></h2>
    </div>
  )
}
export default DashboardUser