import { useEffect, useRef } from 'react';

function Svg({ svg }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.innerHTML = svg;
  });

  return (
    <svg
      ref={ref}
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    ></svg>
  );
}

export default Svg;
