import { Dispatch, SetStateAction } from "react";
import styles from "./Agreement.module.css";
import { onKeyDownHandler } from "../../utils/onKeyDownHandler";
import { IMobileKeyBoardProps } from "../MobileKeyBoard/MobileKeyBoard";

interface IAgreementProps
  extends Omit<IMobileKeyBoardProps, "phoneNumbers" | "setPhoneNumber"> {
  isChecked: boolean;
  setCheked: Dispatch<SetStateAction<boolean>>;
}

export function Agreement({
  setIndex,
  testIndex,
  isChecked,
  setCheked,
}: IAgreementProps) {
  return (
    <>
      <div className={styles.checkboxWrapper}>
        <label className={styles.label}>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={() => setCheked((prev) => !prev)}
            className={isChecked ? styles.checked : ""}
            onKeyDown={(event) => {
              onKeyDownHandler(event, setIndex, testIndex);
              if (event.code === "Enter") {
                setCheked((prev) => !prev);
              }
            }}
            id='12'
          />
          <span className={styles.agreementText}>
            Согласие на обработку персональных данных
          </span>
        </label>
      </div>
    </>
  );
}
