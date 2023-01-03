import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import StyledNavBar from "../components/StyledNavBar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavBar />      
      <Outlet />      
    </>
  );
};
export default SharedLayout;
