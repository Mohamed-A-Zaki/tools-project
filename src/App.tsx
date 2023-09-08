import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

export default function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </>
  );
}
