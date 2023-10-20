import { Dispatch, SetStateAction } from "react";
import styles from "./Agreement.module.css";
interface IAgreementProps {
  isChecked: boolean;
  setCheked: Dispatch<SetStateAction<boolean>>;
}

export function Agreement({ isChecked, setCheked }: IAgreementProps) {
  return (
    <>
      <input
        type='checkbox'
        name='agree'
        className={styles.checkbox}
        checked={isChecked}
        onChange={() => {}}
        id='12'
      />
      <label htmlFor='happy' onClick={() => setCheked((prev) => !prev)}></label>
      <p className={styles.agreementText}>
        Согласие на обработку персональных данных
      </p>
    </>
  );
}
