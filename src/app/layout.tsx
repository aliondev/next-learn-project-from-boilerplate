import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import {Metadata} from "next";

export const metadata : Metadata = {
  title: {
    template: 'Goals tracker | %s ',
    default: 'Goals tracker',
  },
  description: 'Goals tracker to manage your commitment'
}

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
