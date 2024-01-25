import { RefObject, useEffect } from 'react';

interface ValidRefTarget {
  contains(target: EventTarget | null): any;
};

export default function useClickAway (ref:RefObject<ValidRefTarget>  , handler: Function) {
  useEffect(() => {
    const listener = (event:Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler],);
}