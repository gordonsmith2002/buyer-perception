import React from "react";

type BrandDividerProps = {
  color?: "terracotta" | "charcoal" | "olive" | "sand" | "platinum";
  variant?: "solid" | "dashed" | "dotted";
  className?: string;
};

const COLOR_CLASS: Record<NonNullable<BrandDividerProps["color"]>, string> = {
  terracotta: "border-terracotta",
  charcoal: "border-charcoal",
  olive: "border-olive",
  sand: "border-sand",
  platinum: "border-platinum",
};

const VARIANT_CLASS: Record<NonNullable<BrandDividerProps["variant"]>, string> = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
};

/** Horizontal rule matching Tom's Graphic Elements Suite line styles. */
export default function BrandDivider({
  color = "terracotta",
  variant = "solid",
  className = "",
}: BrandDividerProps) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={[
        "w-full border-t",
        COLOR_CLASS[color],
        VARIANT_CLASS[variant],
        className,
      ].join(" ")}
    />
  );
}
