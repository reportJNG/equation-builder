import "./globals.css";

export const metadata = {
  title: "equation",
  description: "equation-iq",
  icons: {
    icon: "/brain.ico",
  },
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
