import { Helmet } from "react-helmet-async"
import DashboardUser from "./components/DashboardUser"
import DashboardWishList from "./components/DashboardWishList"

const Dashboard = () => {
    
  return (
    <div className="py-16 px-5 bg-slate-200">
      <Helmet>
        <title>Dashboard</title>
        <meta 
          name="description" 
          content="Dashboard - User information and wishlist" 
        />
      </Helmet>
      <div className="w-full mx-auto max-w-7xl">
          <DashboardUser />
          <DashboardWishList />
      </div>
    </div>
  )
}
export default Dashboard