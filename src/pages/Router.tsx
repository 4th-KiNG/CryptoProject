import { Route, Routes } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { LoginPage, MainPage, RegistrationPage } from ".";
import { Starfield } from "src/components";
import styles from "./Router.module.scss";

const Router = () => {
  return (
    <>
      <Starfield className={styles.Starfield} speed={0} />
      <Routes>
        <Route path={ROUTES.home} element={<MainPage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.registration} element={<RegistrationPage />} />
      </Routes>
    </>
  );
};

export default Router;
