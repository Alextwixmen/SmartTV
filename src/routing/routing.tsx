import { createHashRouter, RouterProvider } from "react-router-dom";
import { VideoPage } from "../Pages/VideoPage/VideoPage";
import { NumbersPage } from "../Pages/NumbersPage/NumbersPage";
import { FinalPage } from "../Pages/FinalPage/FinalPage";
import { Layout } from "../Pages/Layout/Layout";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/video",
        element: <VideoPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/numbers",
        element: <NumbersPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/final",
        element: <FinalPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default () => <RouterProvider router={router} />;

// настройка алиасов для вит (Мих непомнящий)
