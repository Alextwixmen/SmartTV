interface ICrossIconProps {
  isFocused: boolean;
}
export function CrossIcon({ isFocused }: ICrossIconProps) {
  return (
    <>
      <svg
        width='30'
        height='30'
        viewBox='0 0 16 16'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'
          fill={isFocused ? "#fff" : "#000"}
        ></path>
      </svg>
    </>
  );
}
