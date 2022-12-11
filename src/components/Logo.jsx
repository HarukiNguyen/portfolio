import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        alt="logo"
        className="transition-colors px-2 py-1 rounded focus:hocus-state cursor-pointer group"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="22"
          viewBox="0 0 84 22"
          preserveAspectRatio="xMidYMid meet"
          className=""
        >
          <g
            transform="translate(-17.000000, 45.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M980 435 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
																-15 -7 -15 -15z"
            ></path>
            <path
              d="M170 335 c0 -87 3 -105 15 -105 11 0 15 12 15 49 0 46 17 81 39 81
																19 0 31 -29 31 -77 0 -40 4 -53 15 -53 12 0 15 14 15 64 0 88 -27 116 -78 80
																-22 -15 -22 -14 -22 25 0 30 -4 41 -15 41 -12 0 -15 -18 -15 -105z"
            ></path>
            <path
              d="M800 334 c0 -95 2 -105 18 -102 11 2 19 15 22 36 l5 32 28 -35 c16
																-20 37 -35 49 -35 20 0 19 1 -6 34 -14 19 -26 40 -26 46 0 6 12 27 26 46 26
																33 26 34 5 34 -12 0 -35 -15 -51 -32 l-29 -33 -1 58 c0 50 -2 57 -20 57 -19 0
																-20 -7 -20 -106z"
            ></path>
            <path
              d="M368 382 c-12 -5 -14 -12 -9 -21 5 -7 14 -10 20 -7 6 4 21 4 33 0 19
																-6 17 -9 -22 -23 -39 -14 -45 -21 -48 -48 -4 -41 27 -61 66 -43 19 8 28 8 30
																1 2 -6 10 -11 18 -11 18 0 20 109 2 133 -15 19 -65 30 -90 19z m62 -91 c0 -23
																-37 -38 -54 -21 -8 8 -6 15 8 26 27 20 46 18 46 -5z"
            ></path>
            <path
              d="M510 310 c0 -62 3 -80 14 -80 18 0 26 22 26 71 0 28 6 42 20 51 28
																18 25 31 -5 24 -14 -4 -25 -2 -25 4 0 5 -7 10 -15 10 -12 0 -15 -16 -15 -80z"
            ></path>
            <path
              d="M632 323 c3 -63 5 -69 31 -81 30 -14 58 -9 82 14 21 22 21 134 0 134
																-11 0 -15 -12 -15 -46 0 -50 -14 -84 -34 -84 -23 0 -35 24 -37 78 -2 36 -7 52
																-16 52 -11 0 -13 -16 -11 -67z"
            ></path>
            <path
              d="M980 310 c0 -64 3 -80 15 -80 12 0 15 16 15 80 0 64 -3 80 -15 80
																-12 0 -15 -16 -15 -80z"
            ></path>
          </g>
        </svg>
      </Link>
    </div>
  );
}

export default Logo;
