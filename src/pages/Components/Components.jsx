import { NavLink, Outlet } from "react-router-dom";
import styles from "./Components.module.scss";
import classNames from "classnames";

const navLinkClass = ({ isActive }) =>
  classNames(styles.link, {
    [styles.active]: isActive,
  });

const Components = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.compUl}>
          <li>
            <NavLink to="componentOne" className={navLinkClass}>
              1st Component
            </NavLink>
          </li>
          <li>
            <NavLink to="componentTwo" className={navLinkClass}>
              2nd Component
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Components;
