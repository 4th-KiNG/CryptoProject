import { MENU_LINKS } from "src/constants/menu";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.Logo}>Logo</div>
        <div className={styles.Info}>
          <div className={styles.NavMenu}>
            {MENU_LINKS.map((link, index) => (
              <div key={index} className={styles.NavMenu_Link}>
                {link.label}
              </div>
            ))}
          </div>
          <div className={styles.Contacts}>
            <h6>Contacts</h6>
            <p>+7 (988) 998-99-88</p>
            <p>inst: @hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
