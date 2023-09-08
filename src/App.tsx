import { Outlet } from "react-router-dom";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </>
  );
}
