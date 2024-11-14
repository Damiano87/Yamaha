import DashboardUser from "./components/DashboardUser"
import DashboardWishList from "./components/DashboardWishList"

const Dashboard = () => {
    
  return (
    <div className="py-16 bg-slate-200">
      <div className="w-full mx-auto max-w-7xl">
          <DashboardUser />
          <DashboardWishList />
      </div>
        
    </div>
  )
}
export default Dashboard