import styles from "./hero.module.css";
const Hero = ({ content }) => {
  return (
    <div className={styles.grid}>
      <div className={`${styles.image} ${styles[content.id]}`}></div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content.content }}
      >
      </div>
    </div>
  );
};

export default Hero;
