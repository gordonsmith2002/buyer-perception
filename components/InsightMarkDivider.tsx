import Image from "next/image";
import React from "react";

type InsightMarkDividerProps = {
  color?: "sand" | "olive" | "charcoal" | "terracotta";
  className?: string;
};

const SRC: Record<NonNullable<InsightMarkDividerProps["color"]>, string> = {
  sand: "/images/logo-mark-sand.svg",
  olive: "/images/logo-mark-olive.svg",
  charcoal: "/images/logo-mark-charcoal.svg",
  terracotta: "/images/logo-mark-terracotta.svg",
};

/** Subtle section divider using Tom's insight mark crop. */
export default function InsightMarkDivider({
  color = "sand",
  className = "",
}: InsightMarkDividerProps) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={["flex items-center justify-center gap-4 py-2", className].join(
        " "
      )}
    >
      <span className="h-px flex-1 max-w-[7rem] bg-charcoal/15" />
      <Image
        src={SRC[color]}
        alt=""
        width={28}
        height={48}
        className="h-8 w-auto opacity-80"
      />
      <span className="h-px flex-1 max-w-[7rem] bg-charcoal/15" />
    </div>
  );
}
