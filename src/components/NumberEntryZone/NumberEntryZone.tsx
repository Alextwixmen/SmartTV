import { Dispatch, SetStateAction, useState } from "react";
import { type phoneNumbers } from "../../Pages/NumbersPage/NumbersPage";
import { MobileKeyBoard } from "../MobileKeyBoard/MobileKeyBoard";
import promoBackground from "../../assets/images/promoPicture.png";
import { onNumberDown } from "../../utils/onNumberDown";
import { ExitButton } from "../ExitButton/ExitButton";

export interface INumberEntryZoneProps {
  phoneNumbers: number[];
  setPhoneNumber: Dispatch<SetStateAction<phoneNumbers>>;
}

export function NumberEntryZone({
  setPhoneNumber,
  phoneNumbers,
}: INumberEntryZoneProps) {
  const [testIndex, setIndex] = useState(1);
  return (
    <div onKeyDown={(event) => onNumberDown(event, setPhoneNumber, setIndex)}>
      <ExitButton testIndex={testIndex} setIndex={setIndex} />
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
