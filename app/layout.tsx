import "./globals.css";

export const metadata = {
  title: "equation-builder",
  description: "equation-iq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
