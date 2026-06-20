import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import GoogleAnalytics from "../../components/GoogleAnalytics";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <GoogleAnalytics />
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
