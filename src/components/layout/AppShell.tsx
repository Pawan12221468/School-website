"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ModalProvider, useModal } from "@/context/ModalContext";

function ShellInner({ children }: { children: React.ReactNode }) {
  const { openApply } = useModal();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenApply={openApply} />
      <main className="flex-1">{children}</main>
      <Footer onOpenApply={openApply} />
    </div>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <ShellInner>{children}</ShellInner>
    </ModalProvider>
  );
}
