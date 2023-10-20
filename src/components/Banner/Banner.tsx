import { useState } from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

interface IBannerProps {
  isBannerShown: boolean;
}

export function Banner({ isBannerShown }: IBannerProps) {
  const [isShown, setShow] = useState<Boolean>(false);
  return isBannerShown ? (
    <div className={`${styles.wrapper} ${styles.show}`}>
      <Link to={"/numbers"}>
        <button className={styles.button} onClick={() => console.log("zopa")}>
          OK
        </button>
      </Link>
    </div>
  ) : null;
}
