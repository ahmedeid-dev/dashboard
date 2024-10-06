import { RouterProvider } from "react-router-dom";
import { routes } from "./lib/Routes/route";
import './App.css';

export default function App() {
  return <>
    <RouterProvider router={routes} />
  </>
}
