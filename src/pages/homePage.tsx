import React from "react";
import Sidebar from '../app/components/sidebar';
import Navbar from '../app/components/navbar';
import Dashboard from '../app/components/dashboard';
import FooterBar from '../app/components/Footer';
import { MdHome, MdLibraryBooks, MdEqualizer, MdExitToApp, MdAccountCircle, MdLiveHelp } from 'react-icons/md'

const HomePage: React.FC = () => {
  const sideMenuList = [
    {
      title: 'Home',
      icon: <MdHome />,
      path: '/'
    },
    {
      title: 'Library',
      icon: <MdLibraryBooks />,
      path: '/library'
    },
    {
      title: 'Analysis',
      icon: <MdEqualizer />,
      path: '/analysis'
    },
    {
      title: 'Account',
      icon: <MdAccountCircle />,
      path: '/account'
    }
  ];

  const footerList = [
   {
    id: 1,
    icon: <MdHome />,
    path: '/'
  },
  {
    id: 1,
    icon: <MdLibraryBooks />,
    path: '/library'
  },
  {
    id: 1,
    icon: <MdEqualizer />,
    path: '/analysis'
  },
  {
    id: 1,
    icon: <MdAccountCircle />,
    path: '/account'
  }
  ];

  return (
    <div className="flex flex-row relative w-full h-screen overflow-hidden">
      <div className="w-[50px] hidden md:block">
        <Sidebar list={sideMenuList} />
      </div>
      <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
        <div className="flex flex-col w-[100%] pl-0 md:pl-[50px] lg:pl-[10px] xl:pl-[10px]">
          <Navbar />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
      <FooterBar footer={footerList} />
      </div>
    </div>
  );
};

export default HomePage;
