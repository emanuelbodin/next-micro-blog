import Navbar from "../ui/navbar/Navbar";
import Providers from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main className="flex-column align-center min-h-screen mx-auto my-4">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
