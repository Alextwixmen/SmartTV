import { useNavigate } from "react-router";
import styles from "./ExitButton.module.css";
import { CrossIcon } from "../../assets/icons/Cross";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { onKeyDownHandler } from "../../utils/onKeyDownHandler";

interface IExitButtonProps {
  testIndex?: number;
  setIndex?: Dispatch<SetStateAction<number>>;
  focus?: boolean;
}

export function ExitButton({ testIndex, setIndex, focus }: IExitButtonProps) {
  const navigate = useNavigate();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focus) {
      ref.current?.focus();
    }
  }, []);

  return (
    <button
      className={styles.closeButton}
      tabIndex={1}
      onClick={() => navigate("/video")}
      id='14'
      onKeyDown={(event) => {
        if (setIndex) onKeyDownHandler(event, setIndex, testIndex);
      }}
      ref={ref}
    >
      <CrossIcon isFocused={testIndex === 14 || focus ? true : false} />
    </button>
  );
}
