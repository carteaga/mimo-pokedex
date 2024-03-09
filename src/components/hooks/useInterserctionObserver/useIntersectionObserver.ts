import { useState } from "react";

type IntersectionObserverProps = {
  threshold?: number;
};

type IntersectionObserverResult = {};

export const useIntersectionObserver = (
  props: IntersectionObserverProps
): IntersectionObserverResult => {
  const { threshold = 1 } = props;

  const [ref, setRef] = useState<Element | null>(null);
  return {};
};
