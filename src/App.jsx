import { RouterProvider } from "react-router-dom";
import { routes } from "./lib/Routes/route";
import './App.css';
import { RecoilRoot } from "recoil";

export default function App() {
  return <>
    <RecoilRoot>
      <RouterProvider router={routes} />
    </RecoilRoot>
  </>
}
