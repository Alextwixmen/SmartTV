import styles from "./finalPage.module.css";
import promoBackground from "../../assets/images/promoPicture.png";
import { FinalScreen } from "../../components/FinalScreen/FinalScreen";
import { ExitButton } from "../../components/ExitButton/ExitButton";

export function FinalPage() {
  return (
    <div className={styles.finalPageContainer}>
      <ExitButton focus={true} />
      <FinalScreen />
      <img src={promoBackground}></img>
    </div>
  );
}
