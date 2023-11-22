"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export type types = {
  children: ReactNode;
};

export default function ContentLayout({ children }: types) {
  const ref = useRef<any>(null);

  const onScroll = (e: any) => {
    console.log(e.offset.y);
  };

  useEffect(() => {
    const scroll = Scrollbar.init(ref.current, { damping: 0.1 });

    scroll.addListener(onScroll);

    return () => {
      scroll.removeListener(onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "64px",
          height: "64px",
          padding: "20px",
          border: "1px solid #fff",
          cursor: "pointer",
        }}
        onClick={() => {
          const scroll = Scrollbar.get(ref.current) as Scrollbar;
          scroll.scrollTo(0, 0, 1000);
        }}
      >
        <h2>up</h2>
      </div>
      {children}
    </div>
  );
}
