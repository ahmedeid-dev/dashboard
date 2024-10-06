import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return <>
    {/* <Navbar/>
    <Sidebar />
    <Footer /> */}
    <div
        dir="ltr"
        className="bg-swarningColor flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="w-full flex flex-row">
          <Sidebar />
          <div className="p-3 w-[100%] duration-700">
            <Outlet />
        </div>
        </div>
        <Footer />
      </div>
  </>
}
