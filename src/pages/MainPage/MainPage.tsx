import {
  BlockchainBars,
  BlockchainDashboard,
  Carousel,
  Economy,
  Footer,
  Header,
  Introduction,
  Listing,
  PresaleInfo,
  Sui,
  SupportedBy,
} from "src/components";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <Header />
      <Introduction />
      <PresaleInfo />
      <BlockchainDashboard />
      <Sui />
      <Economy />
      <BlockchainBars />
      <Carousel />
      <SupportedBy />
      <Listing />
      <Footer />
    </div>
  );
};

export default MainPage;
