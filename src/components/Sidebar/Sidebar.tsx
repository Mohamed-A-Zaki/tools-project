import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="d-lg-block sidebar bg-dark"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <NavLink
            to="/"
            className="list-group-item list-group-item-action py-2 ripple text-bg-dark"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Technologies</span>
          </NavLink>
          <NavLink
            to="/youtube"
            className="list-group-item list-group-item-action py-2 ripple  text-bg-dark"
          >
            <i className="fas fa-chart-area fa-fw me-3"></i>
            <span>Youtube</span>
          </NavLink>
          <NavLink
            to="/contact"
            className="list-group-item list-group-item-action py-2 ripple text-bg-dark"
          >
            <i className="fas fa-lock fa-fw me-3"></i>
            <span>Password</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
