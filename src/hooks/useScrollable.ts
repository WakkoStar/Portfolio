import { useLayoutEffect, useState } from 'react';

interface useScrollableObject<T> {
  ref: (node: T | null) => void;
  isScrollable: boolean;
  scrollStatus: { isEnd: boolean; isBegin: boolean };
  setScroll: (offset: number) => void;
  refreshScroll: () => void;
}

function useScrollable<T extends HTMLElement = HTMLDivElement>(
  direction: 'horizontal' | 'vertical'
): useScrollableObject<T> {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null);

  const [isScrollable, setIsScrollable] = useState<boolean>(false);
  const [isEndOfScroll, setIsEndOfScroll] = useState<boolean>(false);
  const [isBeginOfScroll, setIsIsBeginOfScroll] = useState<boolean>(false);

  const scrollDirection =
    direction === 'horizontal' ? 'scrollLeft' : 'scrollTop';
  const scrollDimension =
    direction === 'horizontal' ? 'scrollWidth' : 'scrollHeight';
  const clientDimension =
    direction === 'horizontal' ? 'clientWidth' : 'clientHeight';
  const dimension = direction === 'horizontal' ? 'width' : 'height';

  // Prevent too many rendering using useCallback
  const handleSize = () => {
    const scrollSize = ref?.[scrollDimension] || 0;
    const clientSize = ref?.[clientDimension] || 0;
    setIsScrollable(scrollSize > clientSize);
  };

  const checkScrollStatus = () => {
    const scrollPos = ref?.[scrollDirection] || 0;
    const clientSize = ref?.getBoundingClientRect()?.[dimension] || 0;
    const scrollSize = ref?.[scrollDimension] || 0;

    setIsEndOfScroll((scrollPos + clientSize) / scrollSize > 0.999);
    setIsIsBeginOfScroll(scrollPos <= 0.01);
  };

  // scroll element by its client size
  const setScroll = (offset: number) => {
    if (!ref) return;
    ref[scrollDirection] += ref[clientDimension] * offset;
  };

  useLayoutEffect(() => {
    handleSize();

    checkScrollStatus();
    ref?.addEventListener('scroll', checkScrollStatus);
    window.addEventListener('resize', handleSize);

    return () => {
      ref?.removeEventListener('scroll', checkScrollStatus);
      window.removeEventListener('resize', handleSize);
    };
  }, [ref?.clientHeight, ref?.clientWidth]);

  return {
    ref: setRef,
    isScrollable,
    scrollStatus: { isEnd: isEndOfScroll, isBegin: isBeginOfScroll },
    setScroll,
    refreshScroll: () => {
      handleSize();
    },
  };
}

export default useScrollable;
