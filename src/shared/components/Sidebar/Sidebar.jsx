import { NavLink } from "react-router-dom";
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="sidebar-link" activeclassname="active">
        <span className="sidebar-link__icon icon-home"></span>
      </NavLink>
      <NavLink to="/notification" className="sidebar-link" activeclassname="active">
        <span className="sidebar-link__icon icon-bell"></span>
      </NavLink>
      <NavLink to="/favorites" className="sidebar-link" activeclassname="active">
        <span className="sidebar-link__icon icon-heart"></span>
      </NavLink>
      <NavLink to="/cart" className="sidebar-link" activeclassname="active">
        <span className="sidebar-link__icon icon-cart"></span>
      </NavLink>
    </div>
  );
};