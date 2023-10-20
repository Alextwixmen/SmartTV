import styles from "./NumbersPage.module.css";
import img from "../../assets/images/promoPicture.png";
import { TelephoneNumbers } from "../../components/TelephoneNumbers/TelephoneNumbers";
export function NumbersPage() {
  return (
    <div className={styles.numbersContiner}>
      <TelephoneNumbers />
      <img src={img}></img>
    </div>
  );
}
