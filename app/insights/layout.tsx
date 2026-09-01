import InsightsFooter from "../../components/insights/InsightsFooter";
import InsightsHeader from "../../components/insights/InsightsHeader";

export default function InsightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--bg-insights)] text-[color:var(--text-insights)]">
      <InsightsHeader />
      <main className="flex-1">{children}</main>
      <InsightsFooter />
    </div>
  );
}
