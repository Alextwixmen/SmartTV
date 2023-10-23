import { Dispatch, SetStateAction, useState } from "react";
import { type phoneNumbers } from "../../Pages/NumbersPage/NumbersPage";
import { useNavigate } from "react-router-dom";
import { onKeyDownHandler } from "../../utils/onKeyDownHandler";
import { MobileKeyBoard } from "../MobileKeyBoard/MobileKeyBoard";
import { CrossIcon } from "../../assets/icons/Cross";
import promoBackground from "../../assets/images/promoPicture.png";
import styles from "./NumberEntryZone.module.css";
import { onNumberDown } from "../../utils/onNumberDown";

export interface INumberEntryZoneProps {
  phoneNumbers: number[];
  setPhoneNumber: Dispatch<SetStateAction<phoneNumbers>>;
}

export function NumberEntryZone({
  setPhoneNumber,
  phoneNumbers,
}: INumberEntryZoneProps) {
  const navigate = useNavigate();
  const [testIndex, setIndex] = useState(1);
  return (
    <div onKeyDown={(event) => onNumberDown(event, setPhoneNumber, setIndex)}>
      <button
        className={styles.closeButton}
        tabIndex={1}
        onClick={() => navigate("/video")}
        id='14'
        onKeyDown={(event) => onKeyDownHandler(event, setIndex, testIndex)}
      >
        <CrossIcon isFocused={testIndex === 14 ? true : false} />
      </button>
      <MobileKeyBoard
        testIndex={testIndex}
        setIndex={setIndex}
        setPhoneNumber={setPhoneNumber}
        phoneNumbers={phoneNumbers}
      />
      <img src={promoBackground}></img>
    </div>
  );
}
