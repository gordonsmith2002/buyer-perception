import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brandDark border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-brandLight">
            <div className="font-semibold text-white">Buyer Perception</div>
            <div className="text-white/50 text-sm mt-1">
              © 2026 Buyer Perception Ltd
            </div>
          </div>

          <div className="text-white/50 text-sm flex flex-col gap-2 md:items-end">
            <div>
              <a
                href="mailto:gordon@buyerperception.com"
                className="hover:text-white"
              >
                gordon@buyerperception.com
              </a>
            </div>
            <div>
              <a href="#contact" className="hover:text-white">
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
