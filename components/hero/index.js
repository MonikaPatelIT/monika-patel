import styles from "./hero.module.css";
const Hero = ({ content, theme }) => {
  return (
    <div className={`${styles.grid} ${styles[theme]}`}>
      <div className={styles.image}>Image</div>
      <div className={styles.content}>Hello </div>
    </div>
  );
};

export default Hero;
