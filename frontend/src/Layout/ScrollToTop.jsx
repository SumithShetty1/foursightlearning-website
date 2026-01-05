import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to specific section if navigated with state
    if (location.state && location.state.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      // Remove scrollToId state so it doesn't scroll again
      window.history.replaceState({}, document.title);
    } else {
      // Default scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToTop;
