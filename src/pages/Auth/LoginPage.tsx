import { Footer, Header, Input } from "src/components";
import styles from "./Auth.module.scss";
import { emailIcon, passwordIcon } from "src/assets";
import { Link } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const rowVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const LoginPage = () => {
  const shouldReduce = useReducedMotion();
  return (
    <div className={styles.AuthPage}>
      <Header />
      <div className={styles.Blur} />
      <div className={styles.Form}>
        <motion.div
          className={styles.Form_Header}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true, amount: "some" }}
        >
          <h2 className={styles.Form_Header_Title}>Welcome back</h2>
          <p className={styles.Form_Header_Description}>
            Log in to your account
          </p>
        </motion.div>
        <motion.div
          className={styles.Form_Inputs}
          variants={containerVariants}
          initial="hidden"
          whileInView={shouldReduce ? undefined : "show"}
          animate={shouldReduce ? "show" : undefined}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Input
            startIcon={emailIcon}
            placeholder="Email"
            variants={rowVariants}
          />
          <Input
            startIcon={passwordIcon}
            placeholder="Password"
            variants={rowVariants}
          />
          <button>Log in</button>
        </motion.div>
        <p className={styles.Registration}>
          Don’t have an account? <Link to={ROUTES.registration}>Sign up</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
