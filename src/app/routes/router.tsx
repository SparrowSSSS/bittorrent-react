import { Download } from "@/pages/download";
import { Home } from "@/pages/home";
import { paths } from "@/shared/router";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { path: paths.home, element: <Home /> },
    { path: paths.download, element: <Download /> }
]);
