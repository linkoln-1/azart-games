import React from "react";
import type { Metadata } from "next";
import { StoreProvider } from "@/store/StoreProvider";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Game Center",
  description: "Game list for users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
