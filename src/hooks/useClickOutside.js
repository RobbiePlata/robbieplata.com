import { useEffect } from 'react';

export const useClickOutside = (excludeRef, onOutsideClick) => {
  const isOutsideClick = (ref, event) =>
    ref.current &&
    typeof ref.current.contains === 'function' &&
    !ref.current.contains(event.target);

  const handleClickOutside = (event) => {
    if (Array.isArray(excludeRef)) {
      const result = excludeRef.map(r => isOutsideClick(r, event));
      if (!result.includes(false)) {
        onOutsideClick();
      }
    } else if (isOutsideClick(excludeRef, event)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};