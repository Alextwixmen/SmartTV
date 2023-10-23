import { useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

interface IBannerProps {
  isBannerShown: boolean;
}

export function Banner({ isBannerShown }: IBannerProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return isBannerShown ? (
    <div className={`${styles.wrapper} ${styles.show}`}>
      <Link to={"/numbers"}>
        <button className={styles.button} ref={ref}>
          OK
        </button>
      </Link>
    </div>
  ) : null;
}
