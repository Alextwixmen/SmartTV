import styles from "./FinalScreen.module.css";
export function FinalScreen() {
  return (
    <div className={styles.finalScreenContainer}>
      <div className={styles.finalFrame}>
        <span className={styles.finalTitle}>ЗАЯВКА ПРИНЯТА</span>
        <span className={styles.finalMessage}>
          Держите телефон под рукой.Скоро с Вами свяжется наш менеджер.{" "}
        </span>
      </div>
    </div>
  );
}
