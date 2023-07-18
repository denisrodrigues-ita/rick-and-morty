import loadingCard from "../../assets/img/loadingCard.png";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <section className="load">
      <img
        src={loadingCard}
        alt="Loading"
        className="imgLoad"
      />
      <div className="flex items-center mt-8">
        <p className="text-2xl">Loading</p>
        <div className={styles.wrapper}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
