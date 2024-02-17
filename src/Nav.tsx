import { Link, useLocation } from "react-router-dom";
function Nav() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <nav className="nav nav-pills mt-2">
        <Link
          className={`nav-link ${pathname.includes("Labs") ? "active" : ""}`}
          to="/Labs"
        >
          Labs
        </Link>
        <Link
          className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
          to="/Kanbas"
        >
          Kanbas
        </Link>
        <Link
          className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
          to="/hello"
        >
          Hello
        </Link>
      </nav>
    </>
  );
}
export default Nav;
