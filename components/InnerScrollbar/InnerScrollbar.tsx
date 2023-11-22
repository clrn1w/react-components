"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

interface types {
  children: ReactNode;
}

export default function InnerScrollbar({ children }: types) {
  const ref = useRef<any>(null);

  // scrollbar init
  useEffect(() => {
    Scrollbar.init(ref.current, {
      damping: 0.1,
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
