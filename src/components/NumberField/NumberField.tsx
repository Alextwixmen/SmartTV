import styles from "./NumberField.module.css";
import cn from "classnames";
interface IPhoneNumbersProps {
  phoneNumbers: number[];
  isValidNumber: boolean | null;
}

export function NumberField({
  phoneNumbers,
  isValidNumber,
}: IPhoneNumbersProps) {
  const phoneMask = "+7(___)___-__-__";
  let index = 0;

  const resultNumber = phoneMask.replace(/[_]/g, () =>
    index < phoneNumbers.length ? String(phoneNumbers[index++]) : "_"
  );

  return (
    <span
      className={cn(styles.mobileNumber, {
        [styles.invalidNumber]: isValidNumber === false,
      })}
    >
      {resultNumber}
    </span>
  );
}
