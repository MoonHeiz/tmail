import React, { useCallback, useEffect, useState } from 'react';

type UseOutsideToggleType = [state: boolean, toggle: () => void];

export const useOutsideToggle = <T extends HTMLElement>(ref: React.RefObject<T>): UseOutsideToggleType => {
  const [toggleState, setState] = useState(false);
  const toggle = useCallback(() => setState((state) => !state), []);

  const listener = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Element)) {
        return;
      }

      toggle();
    },
    [ref, toggle]
  );

  useEffect(() => {
    if (toggleState) {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    } else {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    }

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [toggleState, listener]);

  return [toggleState, toggle];
};
