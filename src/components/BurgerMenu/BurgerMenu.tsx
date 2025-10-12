import styles from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  return (
    <div className={styles.BurgerMenu}>
      <div className={styles.BurgerMenu_First} />
      <div className={styles.BurgerMenu_Second} />
      <div className={styles.BurgerMenu_Third} />
    </div>
  );
};

export default BurgerMenu;
