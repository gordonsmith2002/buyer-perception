"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DM_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-login-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--bp-login-sans",
});

export default function LoginPage() {
  const router = useRouter();
  const [nextPath, setNextPath] = useState("/tools");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("next");
    if (requested && requested.startsWith("/")) {
      setNextPath(requested);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/internal-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, next: nextPath }),
      });

      if (!response.ok) {
        setError("Incorrect password.");
        setLoading(false);
        return;
      }

      const payload = (await response.json()) as { next?: string };
      router.push(payload.next || "/tools");
    } catch {
      setError("Unable to sign in right now. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main
      className={[
        playfair.variable,
        dmSans.variable,
        "min-h-screen bg-[#0a0a0f] text-white font-[var(--bp-login-sans)]",
      ].join(" ")}
    >
      <section className="mx-auto flex min-h-screen w-full max-w-xl items-center px-5 py-10">
        <div className="w-full rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/55">
            Internal Access
          </p>
          <h1 className="mt-3 font-[var(--bp-login-serif)] text-4xl text-white">
            Buyer Perception Tools
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Enter your internal password to access reports, calculator, proposals,
            and in-progress assets.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
            <label className="grid gap-2">
              <span className="text-sm text-white/85">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-white/35"
                autoFocus
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-1 rounded-md border border-[#c0392b] bg-[#c0392b] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#b83228] hover:bg-[#b83228] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Checking..." : "Unlock tools"}
            </button>
          </form>

          {error && <p className="mt-3 text-sm text-[#fca5a5]">{error}</p>}
        </div>
      </section>
    </main>
  );
}
