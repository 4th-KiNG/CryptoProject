import {
  BlockchainBars,
  BlockchainDashboard,
  Carousel,
  Economy,
  FAQ,
  Footer,
  Header,
  Introduction,
  Listing,
  PresaleInfo,
  SocialMedia,
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
      <SocialMedia />
      <FAQ />
      <Footer />
    </div>
  );
};

export default MainPage;
