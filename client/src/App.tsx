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

const router = createBrowserRouter([
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
        loader: getAllAtvsLoader
      },
      {
        path: 'atv/:id',
        element: <AtvSinglePage />,
        loader: getSingleAtvLoader
      },
      {
        path: 'motocycles',
        element: <MotocyclesPage />,
        loader: getAllMotosLoader
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
      {
        path: 'add-vehicle',
        element: <CreateVehiclePage />
      },
      {
        path: 'update-atv/:id',
        element: <AtvUpdatePage />,
        loader: getSingleAtvLoader
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
