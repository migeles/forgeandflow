import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <body
        className="neue-regular"
      >
        {children}
      </body>
    </html>
  );
}
