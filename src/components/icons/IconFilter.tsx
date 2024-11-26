
function IconFilter ({color = "white" , width= "24" , heigth= "24" }) {

  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 3.5H2L10 12.96V19.5L14 21.5V12.96L22 3.5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IconFilter;
