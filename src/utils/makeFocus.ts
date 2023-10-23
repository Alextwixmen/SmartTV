export function makeFocus(index: number) {
  document.getElementById(String(index))?.focus();
}
