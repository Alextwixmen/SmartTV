import styles from "./NumbersPage.module.css";
import img from "../../assets/images/promoPicture.png";
import { TelephoneNumbers } from "../../components/TelephoneNumbers/TelephoneNumbers";
import { CrossIcon } from "../../assets/icons/Cross";
import { useNavigate } from "react-router-dom";
export function NumbersPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.numbersContiner}>
      <button
        className={styles.crossBtn}
        tabIndex={1}
        onClick={() => navigate("/video")}
        id='cross'
      >
        {<CrossIcon />}
      </button>
      <TelephoneNumbers />
      <img src={img}></img>
    </div>
  );
}
