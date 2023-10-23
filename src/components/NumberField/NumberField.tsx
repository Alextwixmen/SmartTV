import styles from "./NumberField.module.css";

interface IPhoneNumbersProps {
  phoneNumbers: number[];
}

export function NumberField({ phoneNumbers }: IPhoneNumbersProps) {
  const phoneMask = "+7(___)___-__-__";
  let index = 0;

  const resultNumber = phoneMask.replace(/[_]/g, () =>
    index < phoneNumbers.length ? String(phoneNumbers[index++]) : "_"
  );

  return <span className={styles.mobileNumber}>{resultNumber}</span>;
}
