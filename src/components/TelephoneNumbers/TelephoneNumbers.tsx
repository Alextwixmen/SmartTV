import styles from "./TelephoneNumbers.module.css";
import "../../App.css";
import PhoneInput from "react-phone-input-2";
import { Agreement } from "../Agreement/Agreement";
import "react-phone-input-2/lib/style.css";
import { NumberButton } from "../NumberButton/NumberButton";
import { useEffect, useRef, useState } from "react";

export type btnValue = string | number;
export function TelephoneNumbers() {
  const [isChecked, setCheked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numbers: btnValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, "стереть", 0];

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.focus();
    }
  }, []);

  return (
    <div className={styles.telephoneContainer}>
      <h1 className={styles.title}>Введите ваш номер мобильного телефона</h1>
      <div className={styles.buttonsContainer} ref={ref}>
        {numbers.map((value, index) => (
          <NumberButton number={value} key={index} index={index + 1} />
        ))}
      </div>
      <div className={styles.agreementContainer}>
        <Agreement setCheked={setCheked} isChecked={isChecked} />
      </div>
    </div>
  );
}
