import { NavLink, Outlet } from "react-router-dom";
import styles from "./Body.module.scss";
import classNames from "classnames";

const navLinkClass = ({ isActive }) =>
  classNames(styles.link, {
    [styles.active]: isActive,
  });

function Body() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navLinks}>
            <li className={styles.listItem}>
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink className={navLinkClass} to="/components">
                Components
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink className={navLinkClass} to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>2026</p>
      </footer>
    </div>
  );
}

export default Body;
