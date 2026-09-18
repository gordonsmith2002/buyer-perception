"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { appendCalendlyUtms } from "../lib/calendly";

type CalendlyLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function CalendlyLink({
  href,
  onClick,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: CalendlyLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = appendCalendlyUtms(href, window.location.search);
    onClick?.(event);
  }

  return <a {...props} href={href} target={target} rel={rel} onClick={handleClick} />;
}
