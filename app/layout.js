import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import NavBar from "@/components/NavBar";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "400",
  style: "normal",
  variant: "regular",
  subsets: ["latin"],
});
export const metadata = {
  title: "OvO",
  description: "One Vs One is a game where you can duel your friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plus_jakarta_sans.className} flex flex-col gap-0 h-screen`}
      >
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
