'use client';

import { useEffect, useRef, useCallback } from 'react';

/** Hook that auto-scrolls a container to the bottom when content changes */
export function useAutoScroll<T extends HTMLElement>(dependency: unknown) {
  const ref = useRef<T>(null);
  const userScrolledUp = useRef(false);

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const threshold = 100;
    const isNearBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
    userScrolledUp.current = !isNearBottom;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const el = ref.current;
    if (el && !userScrolledUp.current) {
      el.scrollTop = el.scrollHeight;
    }
  }, [dependency]);

  return ref;
}
