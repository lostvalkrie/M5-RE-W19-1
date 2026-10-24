import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function Body() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/components">Components</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>Text in footer</p>
      </footer>
    </>
  );
}

export default Body;
