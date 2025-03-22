import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import MainLayout from "./MainLayout";
import JobListing from "./page/Job/JobListing";
import NotFoundPage from "./page/NotFound/NotFoundPage";
import AddJobPage from "./page/AddJobPage/AddJobPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs/:id" element={<JobListing />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
