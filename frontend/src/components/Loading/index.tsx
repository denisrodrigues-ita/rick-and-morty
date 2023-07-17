import loadingCard from "../../assets/img/loadingCard.png";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full">
      <img
        src={loadingCard}
        alt="Loading"
        className="w-1/2 mx-auto rounded-md border-2 border-zinc-600"
      />
      <div className="flex items-center mt-8">
        <p className="text-white text-2xl">Loading</p>
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
