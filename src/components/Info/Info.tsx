import { useNavigate } from "react-router";
import styles from "./Info.module.css";
export function Info() {
  const navigate = useNavigate();
  return window.location.hash === "" ? (
    <div className={styles.infoCotainer}>
      <span>made by alextwixman</span>
      <a href='https://github.com/Alextwixmen/SmartTV' target='blank'>
        github repo
      </a>
      <button onClick={() => navigate("/video")} className={styles.openSiteBtn}>
        Перейти на микросайт
      </button>
      <div>
        Инструкция: для корректной работы с api numverify необходимо
        использовать HTTP-протокол. HTTPS доступен только на платной версии.
      </div>
    </div>
  ) : null;
}
