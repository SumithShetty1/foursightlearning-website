import { useEffect } from "react";

/**
 * Hook to add scroll animations to elements with these classes:
 * animate-fade-up, animate-fade-right, animate-fade-left, animate-zoom-in
 */
export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-fade-up, .animate-fade-right, .animate-fade-left, .animate-zoom-in"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
