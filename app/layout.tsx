import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMOTI-BOT | ESP32 Robot With Emotions",
  description:
    "Meet EMOTI-BOT — an ESP32-powered expressive robot with OLED eyes, WiFi, Bluetooth, and touch interaction. Pre-order now.",
  keywords: "ESP32, robot, emotions, OLED, IoT, maker, DIY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
