import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="neue-regular"
      >
        {children}
      </body>
    </html>
  );
}
