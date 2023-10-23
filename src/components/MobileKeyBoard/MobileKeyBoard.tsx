import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { INumberEntryZoneProps } from "../NumberEntryZone/NumberEntryZone";
import { Agreement } from "../Agreement/Agreement";
import { NumberButton } from "../NumberButton/NumberButton";
import { keyBoardValues } from "./data";
import { onKeyDownHandler } from "../../utils/onKeyDownHandler";
import { makeFocus } from "../../utils/makeFocus";
import { NumberField } from "../NumberField/NumberField";
import styles from "./MobileKeyBoard.module.css";

export interface IMobileKeyBoardProps extends INumberEntryZoneProps {
  testIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

export function MobileKeyBoard({
  testIndex,
  setIndex,
  setPhoneNumber,
  phoneNumbers,
}: IMobileKeyBoardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isChecked, setCheked] = useState(false);

  useEffect(() => {
    if (ref.current !== null) {
      makeFocus(testIndex);
    }
  }, []);

  return (
    <div className={styles.mobileContainer} onKeyDown={(event) => {}}>
      <h1 className={styles.title}>Введите ваш номер мобильного телефона</h1>
      <div className={styles.numberFieldContainer}>
        <NumberField phoneNumbers={phoneNumbers} />
      </div>
      <h2 className={styles.consultationText}>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </h2>
      <div className={styles.buttonsContainer} ref={ref}>
        {keyBoardValues.map((value, index) => (
          <NumberButton
            number={value}
            key={index}
            index={index + 1}
            testIndex={testIndex}
            setIndex={setIndex}
            setPhoneNumber={setPhoneNumber}
          />
        ))}
      </div>
      <div className={styles.agreementContainer}>
        <Agreement
          setIndex={setIndex}
          testIndex={testIndex}
          isChecked={isChecked}
          setCheked={setCheked}
        />
      </div>
      <button
        className={styles.confirmButton}
        onClick={() => console.log("click")}
        id='13'
        onKeyDown={(event) => onKeyDownHandler(event, setIndex, testIndex)}
        disabled={phoneNumbers.length === 10 && isChecked ? false : true}
      >
        Подтвердить номер
      </button>
    </div>
  );
}

// http://apilayer.net/api/validate

//     ? access_key = b8effc8d99b05405e9792cfed1f002c4
//     & number = 14158586273
//     & country_code = RU
//     & format = 1
