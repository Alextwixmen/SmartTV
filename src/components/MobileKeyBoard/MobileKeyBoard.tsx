import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { INumberEntryZoneProps } from "../NumberEntryZone/NumberEntryZone";
import { Agreement } from "../Agreement/Agreement";
import { NumberButton } from "../NumberButton/NumberButton";
import { keyBoardValues } from "./data";
import { onKeyDownHandler } from "../../utils/onKeyDownHandler";
import { makeFocus } from "../../utils/makeFocus";
import { NumberField } from "../NumberField/NumberField";
import styles from "./MobileKeyBoard.module.css";
import { ConFirmButton } from "../ConfirmButton/ConfirmButton";
import { InCorrectNumber } from "../InCorrectNumber/InCorrectNumber";
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
  const [isValidNumber, setIsValidNumber] = useState<boolean | null>(null);
  useEffect(() => {
    if (ref.current !== null) {
      makeFocus(testIndex);
    }
  }, []);
  return (
    <div className={styles.mobileContainer}>
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
        {isValidNumber === false ? (
          <InCorrectNumber />
        ) : (
          <Agreement
            setIndex={setIndex}
            testIndex={testIndex}
            isChecked={isChecked}
            setCheked={setCheked}
          />
        )}
      </div>
      <ConFirmButton
        phoneNumbers={phoneNumbers}
        setIndex={setIndex}
        setPhoneNumber={setPhoneNumber}
        testIndex={testIndex}
        isChecked={isChecked}
        onKeyDownHandler={onKeyDownHandler}
        isValidNumber={isValidNumber}
        setIsValidNumber={setIsValidNumber}
      />
    </div>
  );
}
