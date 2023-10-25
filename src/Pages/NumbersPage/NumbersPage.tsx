import { useEffect, useRef, useState } from "react";
import styles from "./NumbersPage.module.css";
import { NumberEntryZone } from "../../components/NumberEntryZone/NumberEntryZone";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
export type phoneNumbers = number[] | [];

export function NumbersPage() {
  const navigate = useNavigate();
  const [phoneNumbers, setPhoneNumber] = useState<phoneNumbers>([]);
  let timer: number;

  useEffect(() => {
    timer = window.setTimeout(() => {
      navigate("/video");
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // return () => clearInterval(timer);

  return (
    <div
      className={styles.numbersContiner}
      onClick={() => clearTimeout(timer)}
      onKeyDown={() => clearTimeout(timer)}
    >
      <NumberEntryZone
        setPhoneNumber={setPhoneNumber}
        phoneNumbers={phoneNumbers}
      />
    </div>
  );
}
