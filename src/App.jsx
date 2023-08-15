import React, { useState } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css"
import Header from './component/Header/Header';
import MainPage from './component/MainPage/MainPage';
import DetailPage from './component/DetailPage/DetailPage';
import SidebarDetail from './component/SideBar/SidebarDetail';

const Layout = () => {
  const [changeSidebar, setChangeSidebar] = useState(false);
  return (
    <did className='layout-app'>
      <Header changeSidebar={changeSidebar} setChangeSidebar={setChangeSidebar} />
      <Outlet context={{ changeSidebar, setChangeSidebar }} />
    </did>
  )
}

export default function App() {
  console.log("check", import.meta.env)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <div>404 NOT FOUND</div>,
      children: [
        { index: true, element: <MainPage /> },
        {
          path: "detail",
          element: <DetailPage />
        }
      ]
    }
  ], { basename: import.meta.env.BASE_URL });

  return (
    <>
      <RouterProvider router={router} />
      {/* <SidebarDetail /> */}
    </>
  );
}
