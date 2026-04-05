"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger e.g. 100ms between sibling cards */
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (!first) return;
        if (first.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["reveal", visible ? "is-visible" : "", className ?? ""].join(
        " "
      )}
      style={
        {
          "--reveal-delay": `${delayMs}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
