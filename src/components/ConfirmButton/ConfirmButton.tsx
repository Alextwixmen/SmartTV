import { Dispatch, SetStateAction, KeyboardEvent } from "react";
import { COUNTRY_CODE, FORMAT } from "./requestData";
import { IMobileKeyBoardProps } from "../MobileKeyBoard/MobileKeyBoard";
import styles from "./ConfirmButton.module.css";
interface IConfirmButtonProps extends IMobileKeyBoardProps {
  isChecked: boolean;
  onKeyDownHandler: (
    event: KeyboardEvent<HTMLButtonElement>,
    setIndex: Dispatch<SetStateAction<number>>,
    testIndex?: number
  ) => void;
  setIsValidNumber: Dispatch<SetStateAction<boolean | null>>;
}
export function ConFirmButton({
  onKeyDownHandler,
  setIndex,
  testIndex,
  phoneNumbers,
  isChecked,
  setIsValidNumber,
}: IConfirmButtonProps) {
  const number = `8${phoneNumbers.join("")}`;
  const handleClick = async () => {
    const response = await fetch(
      `http://apilayer.net/api/validate?access_key=${
        import.meta.env.VITE_ACCESSTOKEN
      }&number=${number}&country_code=${COUNTRY_CODE}&format=${FORMAT}`
    );
    const data = await response
      .json()
      .catch(() => console.error("Ошибка при выполнении запроса"));
    setIsValidNumber(data.valid);
    // setIsValidNumber(true);
  };

  return (
    <button
      className={styles.confirmButton}
      onClick={() => handleClick()}
      id='13'
      onKeyDown={(event) => onKeyDownHandler(event, setIndex, testIndex)}
      disabled={phoneNumbers.length === 10 && isChecked ? false : true}
    >
      Подтвердить номер
    </button>
  );
}
