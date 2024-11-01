import { useEffect } from 'react';

export const useIntersectionObserver = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-title');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []); // Empty dependency array means this runs once on mount
};