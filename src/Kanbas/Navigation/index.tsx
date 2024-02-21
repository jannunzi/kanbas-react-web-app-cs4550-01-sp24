import { Link, useLocation } from "react-router-dom";
import "./index.css";
function KanbasNavigator() {
  const { pathname } = useLocation();
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox"];
  return (
    <>
      <ul className="wd-kanbas-navigation">
        {links.map((link) => (
          <li key={link} className={pathname.includes(link) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link}`}>{link}</Link>
          </li>
        ))}
        <li>
          <Link to="/Labs">Labs</Link>
        </li>
      </ul>
    </>
  );
}

export default KanbasNavigator;
