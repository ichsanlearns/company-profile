import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function Root() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
