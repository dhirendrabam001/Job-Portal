import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const linkRoutes = [
    { name: "Home", url: "/" },
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Upload Jobs", url: "/upload-jobs" },
    { name: "About Us", url: "/about-us" },
  ];

  const location = useLocation();

  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-0 gap-md-4">
      {linkRoutes.map((items) => {
        const isActive = location.pathname === items.url;

        return (
          <li className="nav-item" key={items.url}>
            <Link
              to={items.url}
              className={`nav-link ${
                isActive ? "active fw-bold text-primary" : ""
              }`}
            >
              {items.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
