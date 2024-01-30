import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className="container">
        <div className={styles.wrapper}>
          <NavLink className={styles.link} to="/">
            Все котики
          </NavLink>
          <NavLink className={styles.link} to="/favorites">
            Любимые котики
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
