import { useState } from "react";
import { BurgerMenu } from "../BurgerMenu";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { MENU_LINKS } from "src/constants/menu";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>Logo</div>
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
        <button className={styles.GetStarted}>Get started</button>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;
