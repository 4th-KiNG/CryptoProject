import { useState } from "react";
import { BurgerMenu } from "../BurgerMenu";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { MENU_LINKS } from "src/constants/menu";
import { logo } from "src/assets";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "src/constants/routes";

const Header = () => {
  const nav = useNavigate();
  const [isOpenMenu] = useState(false);
  return (
    <div className={styles.Header}>
      <Link to={ROUTES.home}>
        <img src={logo} className={styles.Logo} />
      </Link>
      <div
        className={classNames(styles.NavMenu, { [styles.Active]: isOpenMenu })}
      >
        {MENU_LINKS.map((link, index) => (
          <div className={styles.NavMenu_Link} key={index}>
            {link.label}
          </div>
        ))}
      </div>
      <div className={styles.LeftBlock}>
        <button className={styles.GetStarted} onClick={() => nav(ROUTES.login)}>
          Get started
        </button>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;
