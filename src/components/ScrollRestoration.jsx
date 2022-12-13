import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollRestoration({ children }) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}
export default ScrollRestoration;
