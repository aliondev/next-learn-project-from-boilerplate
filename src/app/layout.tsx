import "./globals.css";
import NavBar from "@/components/navbar/NavBar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <NavBar />
          <div>{children}</div>
      </body>
    </html>
  );
}
