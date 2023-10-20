import styles from "./NumberButton.module.css";
import { type btnValue } from "../TelephoneNumbers/TelephoneNumbers";
import cn from "classnames";
import { useEffect, useRef } from "react";

interface INumberButton {
  number?: btnValue;
  index: number;
}
let btnIndex = 1;

export function NumberButton({ number, index }: INumberButton) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current?.id === "1") {
      ref.current?.focus();
    }
    ref.current?.addEventListener("keydown", (event) => {
      const arrowType = event.code;
      const focusBtn = document.activeElement.id;
      console.log(document.activeElement, " id =>", focusBtn);
      if (arrowType === "ArrowRight") {
        btnIndex += 1;
        document.getElementById(String(btnIndex))?.focus();
        console.log(document.getElementById(String(btnIndex)));
      }
      if (arrowType === "ArrowLeft") {
        btnIndex -= 1;
        document.getElementById(String(btnIndex))?.focus();
        console.log(document.getElementById(String(btnIndex)));
      }
      if (arrowType === "ArrowUp") {
        btnIndex -= 3;
        document.getElementById(String(btnIndex))?.focus();
        console.log(document.getElementById(String(btnIndex)));
      }
      if (arrowType === "ArrowDown") {
        btnIndex += 3;
        document.getElementById(String(btnIndex))?.focus();
        console.log(document.getElementById(String(btnIndex)));
      }
    });
  }, []);

  return (
    <button
      className={cn(styles.numberButton, {
        [styles.textBtn]: typeof number === "string",
      })}
      tabIndex={1}
      ref={ref}
      id={String(index)}
    >
      {number}
    </button>
  );
}
