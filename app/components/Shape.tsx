interface ShapeProps {
  width: string;
  height: string;
}

const Shape = ({ height, width }: ShapeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_105_305)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 158.405C46.1571 143.817 56.1862 153.845 41.5975 200C68.5533 153.845 131.447 153.845 158.403 200C143.824 153.845 153.854 143.817 200 158.405C153.854 131.45 153.854 68.5603 200 41.6059C153.854 56.1832 143.824 46.1547 158.403 0C131.447 46.1547 68.5533 46.1547 41.5975 0C56.1862 46.1547 46.1571 56.1832 0 41.6059C46.1571 68.5603 46.1571 131.45 0 158.405ZM100 137C120.435 137 137 120.435 137 100C137 79.5655 120.435 63 100 63C79.5655 63 63 79.5655 63 100C63 120.435 79.5655 137 100 137Z"
          fill="url(#paint0_linear_105_305)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_105_305"
          x1="20.5"
          y1="16"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACAAFF" /> <stop offset="1" stopColor="#C0E8FF" />
        </linearGradient>
        <clipPath id="clip0_105_305">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Shape;
