import { makeFocus } from "./makeFocus";
import { DOWN, LEFT, RIGHT, UP } from "../utils/arrowTypes";
import { borderConditionsHandler } from "./borderConditionsHandler";
import { Dispatch, SetStateAction, KeyboardEvent } from "react";

export function onKeyDownHandler(
  event: KeyboardEvent<HTMLButtonElement>,
  setIndex: Dispatch<SetStateAction<number>>,
  testIndex?: number
) {
  const arrowType = event.code;
  // хендлим нажатие стрелочки вверх при нахождении на первом ряду кнопок
  if (
    (testIndex === 1 && arrowType === UP) ||
    (testIndex === 2 && arrowType === UP) ||
    (testIndex === 3 && arrowType === UP)
  ) {
    return;
  }
  // хендлим нажатие стрелочки влево при нахождении кнопке 1
  if (testIndex === 1 && arrowType === LEFT) {
    return;
  }

  // хендлим нажатие стрелочек вверх/вниз/вправо при нахождении на кнопке "закрыть"
  if (
    (testIndex === 14 && arrowType === DOWN) ||
    (testIndex === 14 && arrowType === UP) ||
    (testIndex === 14 && arrowType === RIGHT)
  ) {
    return;
  }
  // хендлим нажатие стрелочки вверх при нахождении на чек-боксе
  if (testIndex === 12 && arrowType === UP) {
    borderConditionsHandler(10, setIndex);
    return;
  }
  // хендлим нажатие стрелочки вниз при нахождении на чек-боксе
  if (testIndex === 12 && arrowType === DOWN) {
    borderConditionsHandler(13, setIndex);
    return;
  }
  // хендлим нажатие стрелочки вниз при нахождении на цифле 9
  if (testIndex === 9 && arrowType === DOWN) {
    borderConditionsHandler(11, setIndex);
    return;
  }
  // хендлим нажанитие стрелочки вверх при нхождении на кнопке 0
  if (testIndex === 11 && arrowType === UP) {
    borderConditionsHandler(9, setIndex);
    return;
  }
  // хендлим нажанитие стрелочки вниз при нхождении на кнопке 0
  if (testIndex === 11 && arrowType === DOWN) {
    borderConditionsHandler(12, setIndex);
    return;
  }
  // хендлим нажатие стрелочки вверх при нахождении на кнопке 'подтвердить номер'
  if (testIndex === 13 && arrowType === UP) {
    borderConditionsHandler(12, setIndex);
    return;
  }
  // хендлим нажатие стрелочки вверх при нахождении на кнопке 'подтвердить номер'
  if (testIndex === 13 && arrowType === DOWN) {
    return;
  }
  // хендлим нажатие вниз при нахождении на цифре 8
  if (testIndex === 8 && arrowType === DOWN) {
    borderConditionsHandler(10, setIndex);
    return;
  }
  // хендлим нажатие вниз при нахождении на кнопке 'стереть'
  if (testIndex === 10 && arrowType === DOWN) {
    borderConditionsHandler(12, setIndex);
    return;
  }

  if (testIndex !== undefined) {
    if (arrowType === RIGHT) {
      if (testIndex !== undefined) {
      }
      makeFocus((testIndex += 1));
      setIndex((prevIndex) => (prevIndex += 1));
    }
    if (arrowType === LEFT) {
      makeFocus((testIndex -= 1));
      setIndex((prevIndex) => (prevIndex -= 1));
    }
    if (arrowType === UP) {
      makeFocus((testIndex -= 3));
      setIndex((prevIndex) => (prevIndex -= 3));
    }
    if (arrowType === DOWN) {
      makeFocus((testIndex += 3));
      setIndex((prevIndex) => (prevIndex += 3));
    }
  }
}
