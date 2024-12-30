
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-200">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
