import { Download } from "@/pages/download";
import { Home } from "@/pages/home";
import { paths } from "@/shared/router";
import { Root } from "@/widgets/root";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: paths.home, element: <Home /> },
            { path: paths.download, element: <Download /> }
        ]
    }
]);
