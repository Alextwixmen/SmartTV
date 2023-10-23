import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import { numbersValue } from "../components/MobileKeyBoard/data";
import { phoneNumbers } from "../Pages/NumbersPage/NumbersPage";
import { makeFocus } from "./makeFocus";
export function onNumberDown(
  event: KeyboardEvent<HTMLDivElement>,
  setPhoneNumber: Dispatch<SetStateAction<phoneNumbers>>,
  setIndex: Dispatch<SetStateAction<number>>
) {
  const key = event.key;
  if (numbersValue.includes(Number(key))) {
    makeFocus(Number(key));
    setIndex(Number(key));
    setPhoneNumber((prev) => {
      if (prev.length === 10) {
        return prev;
      } else {
        return [...prev, Number(key)];
      }
    });
  }
  if (key === "Backspace") {
    makeFocus(10);
    setIndex(10);
    setPhoneNumber((prev) => {
      prev.pop();
      return [...prev];
    });
  }
}
