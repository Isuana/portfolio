import { Link, Outlet } from "react-router-dom";
import './page.css';
import logo from '../images/logo.png';

const Page = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt='logo' className="logo-view" />
        </Link>
      </nav>
      <nav id='nav_panel'>
        <ul className="left-menu">
          <li className="left-list">
            MENU
          </li>
          <li className="left-list">
            <Link to="/form">Form</Link>
          </li>
          <li className="left-list">
            Notebook
          </li>
          <li className="left-list">
            Quiz
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Page;
