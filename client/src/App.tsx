import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/HomePage/Home";
import AtvPage from "./routes/AtvsPage/AtvsPage";
import AtvSinglePage from "./routes/AtvSinglePage/AtvSinglePage";
import MotocyclesPage from "./routes/MotocyclesPage/MotocyclesPage";
import MotoSinglePage from "./routes/MotoSinglePage/MotoSinglePage";
import EditUserPage from './routes/EditUserPage/EditUserPage';
import CreateVehiclePage from "./routes/CreateVehicle/CreateVehiclePage";
import { getAllAtvsLoader, getSingleAtvLoader } from "./loaders/atvLoader";
import { getAllMotosLoader, getSingleMotoLoader } from "./loaders/motoLoaders";
import AtvUpdatePage from "./routes/UpdateAtv/UpdateAtvPage";
import UpdateMotoPage from "./routes/UpdateMoto/UpdateMotoPage";
import ComparePage from "./routes/ComparePage/ComparePage";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import Unauthorized from "./routes/Unauthorized/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./routes/Login/PersistLogin";
import Missing from "./routes/Missing/Missing";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />
  },
  // catch all
  {
    path: "*",
    element: <Missing />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'atv',
        element: <AtvPage />,
        loader: getAllAtvsLoader,
      },
      {
        path: 'atv/:id',
        element: <AtvSinglePage />,
        loader: getSingleAtvLoader
      },
      {
        path: 'motocycles',
        element: <MotocyclesPage />,
        loader: getAllMotosLoader,
      },
      {
        path: 'motocycles/:id',
        element: <MotoSinglePage />,
        loader: getSingleMotoLoader
      },
      {
        path: 'edit-user',
        element: <EditUserPage />
      },
      // Protected routes ===============================================
      {
        element: <PersistLogin />,
        children: [
          {
        element: <RequireAuth allowedRoles={['Admin']}/>,
        children: [
          {
            path: 'add-vehicle',
            element: <CreateVehiclePage />
          },
        ]
      },
      {
        element: <RequireAuth allowedRoles={['Admin']}/>,
        children: [
          {
            path: 'update-atv/:id',
            element: <AtvUpdatePage />,
            loader: getSingleAtvLoader
          },
        ]
      },
      {
        element: <RequireAuth allowedRoles={['Admin']}/>,
         children: [
          {
            path: 'update-moto/:id',
            element: <UpdateMotoPage />,
            loader: getSingleMotoLoader
          },
        ]
      },
        ]
      },

      // =================================================================

      {
        path: 'atv/compare',
        element: <ComparePage />
      },
      {
        path: 'motocycles/compare',
        element: <ComparePage />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
