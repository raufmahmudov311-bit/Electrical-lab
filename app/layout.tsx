import "./globals.css";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata = {
  title: "Virtual Electrical Lab",
  description: "Interactive electrical engineering learning laboratory"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
