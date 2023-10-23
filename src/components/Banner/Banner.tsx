import { useEffect, useRef, useState } from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

interface IBannerProps {
  isBannerShown: boolean;
}

export function Banner({ isBannerShown }: IBannerProps) {
  const [isShown, setShow] = useState<Boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return true ? (
    <div className={`${styles.wrapper} ${styles.show}`}>
      <Link to={"/numbers"}>
        <button className={styles.button} ref={ref}>
          OK
        </button>
      </Link>
    </div>
  ) : null;
}
