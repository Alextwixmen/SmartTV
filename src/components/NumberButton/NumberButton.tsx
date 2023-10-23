import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { onKeyDownHandler } from "../../utils/onKeyDownHandler";
import { type keyBoardValue } from "../MobileKeyBoard/data";
import styles from "./NumberButton.module.css";
import { INumberEntryZoneProps } from "../NumberEntryZone/NumberEntryZone";
import { makeFocus } from "../../utils/makeFocus";
import { MouseEvent } from "react";
interface INumberButtonProps
  extends Omit<INumberEntryZoneProps, "phoneNumbers"> {
  number?: keyBoardValue;
  index: number;
  testIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
  setIsValidNumber: Dispatch<SetStateAction<boolean | null>>;
}

export function NumberButton({
  number,
  index,
  testIndex,
  setIndex,
  setPhoneNumber,
  setIsValidNumber,
}: INumberButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current?.id === "1") {
      ref.current?.focus();
    }
  }, []);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    // сбрасываем невалидность номера, если пользователь начинает стирать прошлый номер
    if (target.id === "10") {
      setIsValidNumber(null);
    }
    setIndex(Number(target.id));
    makeFocus(Number(target.id));
    if (Number(target.id) === 10) {
      setPhoneNumber((prev) => {
        prev.pop();
        return [...prev];
      });
    } else {
      setPhoneNumber((prev) => {
        if (prev.length === 10) {
          return prev;
        } else {
          return [...prev, Number(target.id) === 11 ? 0 : Number(target.id)];
        }
      });
    }
  };

  return (
    <button
      ref={ref}
      className={styles.numberButton}
      tabIndex={1}
      id={String(index)}
      onClick={onClickHandler}
      onKeyDown={(event) => onKeyDownHandler(event, setIndex, testIndex)}
    >
      {number}
    </button>
  );
}
