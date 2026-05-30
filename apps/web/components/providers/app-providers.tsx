"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { initializeGsap } from "@/lib/gsap/initialize-gsap";

type AppProvidersProps = Readonly<{
  children: ReactNode;
}>;

export function AppProviders({ children }: AppProvidersProps) {
  useEffect(() => {
    initializeGsap();
  }, []);

  return children;
}
