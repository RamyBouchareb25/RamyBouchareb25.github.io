import React from "react";
function Flutter({ opacity = 1, color = "#607B96" ,size=20}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity} clip-path="url(#clip0_3085_458)">
        <path
          d="M14.7205 2.84131L4.72046 12.8413L7.80346 15.9243L20.8835 2.84131H14.7205V2.84131ZM14.7145 12.0393L9.33946 17.4603L14.7115 22.8403H20.9005L15.5135 17.4403L20.9025 12.0403H14.7145V12.0393Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3085_458">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.811523 0.84082)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Flutter;
