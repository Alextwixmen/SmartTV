import { Dispatch, SetStateAction } from "react";
import { makeFocus } from "./makeFocus";

export function borderConditionsHandler(
  index: number,
  setIndex: Dispatch<SetStateAction<number>>
) {
  makeFocus(index);
  setIndex(index);
  return;
}
