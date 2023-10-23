import { useState } from "react";
import styles from "./NumbersPage.module.css";
import { NumberEntryZone } from "../../components/NumberEntryZone/NumberEntryZone";
import { onNumberDown } from "../../utils/onNumberDown";

export type phoneNumbers = number[] | [];

export function NumbersPage() {
  const [phoneNumbers, setPhoneNumber] = useState<phoneNumbers>([]);
  return (
    <div className={styles.numbersContiner}>
      <NumberEntryZone
        setPhoneNumber={setPhoneNumber}
        phoneNumbers={phoneNumbers}
      />
    </div>
  );
}
