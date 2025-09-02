import { Outlet } from "react-router";
import HeaderComponent from "../header";

function Layout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}

export default Layout;