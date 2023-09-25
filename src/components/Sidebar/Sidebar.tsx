import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav id="sidebarMenu" className="d-lg-block sidebar bg-dark flex-shrink-0">
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
            to="/youtube-web"
            className="list-group-item list-group-item-action py-2 ripple  text-bg-dark"
          >
            <i className="fas fa-chart-area fa-fw me-3"></i>
            <span>Web Channels</span>
          </NavLink>
          <NavLink
            to="/work"
            className="list-group-item list-group-item-action py-2 ripple text-bg-dark"
          >
            <i className="fas fa-lock fa-fw me-3"></i>
            <span>Work</span>
          </NavLink>
          <NavLink
            to="/others"
            className="list-group-item list-group-item-action py-2 ripple text-bg-dark"
          >
            <i className="fas fa-lock fa-fw me-3"></i>
            <span>Others</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
