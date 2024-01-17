"use client";

import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
