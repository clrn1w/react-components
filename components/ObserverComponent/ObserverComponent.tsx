"use client";

import React, { ReactNode, useEffect, useState, useRef } from "react";

import useOnScreen from "@/hooks/useOnScreen";

export type ObserverLayoutProps = {
  children: (isVisible: boolean) => ReactNode;
  threshold?: number;
};

export default function ObserverLayout({
  children,
  threshold = 0.3,
}: ObserverLayoutProps) {
  const ref = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(ref, threshold);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [onScreen]);

  return <div ref={ref}>{children(isVisible)}</div>;
}

{
  /* 
how to use:

<ObserverLayout>
  {(isVisible) => (
    ...сontent
  )
</ObserverLayout> 
*/
}
