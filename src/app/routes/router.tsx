import { Download } from "@/pages/download";
import { GetTorrent } from "@/pages/get-torrent";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { path: "/", element: <GetTorrent /> },
    { path: "/download", element: <Download /> }
]);
