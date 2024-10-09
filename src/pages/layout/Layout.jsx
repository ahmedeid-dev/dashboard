import Navbar from './../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/sidebar/Sidebar';
import { useState } from 'react';
import { themeState } from './../../lib/Recoil/dark'
import { useRecoilState } from 'recoil';
import { dirLayoutState } from '../../lib/Recoil/dir';

export default function Layout() {

  const [layout] = useRecoilState(dirLayoutState);
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return <>
    <div
      dir="ltr"
      className={`${theme=='dark'?"light":'dark'}  flex flex-col`}>
      <div className='w-full'>
        <Navbar dirs={layout} toggleTheme={toggleTheme} darkState={theme} toggleSidebar={toggleSidebar} />
      </div>
      <div className="w-full flex flex-row">
        <SideBar isCollapsed={isSidebarCollapsed} />
        <div className=" mt-20 z-40 p-3 w-[100%] duration-700">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  </>
}
