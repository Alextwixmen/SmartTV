import { useState } from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
export function Banner() {
  const [isShown, setShow] = useState<Boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Link to={"/numbers"}>
        <button className={styles.button} onClick={() => console.log("zopa")}>
          OK
        </button>
      </Link>
    </div>
  );
}
