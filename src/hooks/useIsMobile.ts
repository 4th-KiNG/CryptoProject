import { useMemo } from "react";

export const useIsMobile = () => {
  const isMobile = useMemo(() => {
    return document.documentElement.clientWidth < 768;
  }, []);

  return {
    isMobile,
  };
};
