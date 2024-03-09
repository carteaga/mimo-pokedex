import { useEffect, useState } from "react";

const DEFAULT_DELAY_IN_MS = 500;

const useDebounce = <T>(value: T, delay?: number): T => {
  const delayInMs = delay ?? DEFAULT_DELAY_IN_MS;
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMs);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
