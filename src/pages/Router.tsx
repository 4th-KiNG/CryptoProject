import { Route, Routes } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { LoginPage, MainPage, RegistrationPage } from ".";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<MainPage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.registration} element={<RegistrationPage />} />
      </Routes>
    </>
  );
};

export default Router;
