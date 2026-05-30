"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useCyberGsap } from "@/hooks/use-cyber-gsap";

type CyberMotionShellProps = Readonly<{
  children: ReactNode;
}>;

export function CyberMotionShell({ children }: CyberMotionShellProps) {
  const pathname = usePathname();

  const scope = useCyberGsap<HTMLDivElement>(
    ({ gsap }) => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-page-shell]",
          { autoAlpha: 0, y: 18, filter: "blur(18px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.72 }
        );

        gsap.to("[data-aurora-orb]", {
          x: "random(-34, 34)",
          y: "random(-28, 28)",
          scale: "random(0.92, 1.12)",
          duration: "random(8, 14)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            each: 0.42,
            from: "random"
          }
        });

        // This prepares the course-card reveal pattern without coupling it to a specific page component.
        if (document.querySelector("[data-course-grid]")) {
          gsap.from("[data-course-card]", {
            autoAlpha: 0,
            y: 26,
            rotateX: -8,
            transformOrigin: "50% 100%",
            stagger: 0.12,
            scrollTrigger: {
              trigger: "[data-course-grid]",
              start: "top 82%",
              once: true
            }
          });
        }
      });

      return () => motion.revert();
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true
    }
  );

  return (
    <main ref={scope} className="relative isolate min-h-dvh overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-cyber-atmosphere" aria-hidden="true">
        <div
          data-aurora-orb
          className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-aqua-400/20 blur-3xl"
        />
        <div
          data-aurora-orb
          className="absolute right-[-12rem] top-[10%] h-[30rem] w-[30rem] rounded-full bg-volt-pink/18 blur-3xl"
        />
        <div
          data-aurora-orb
          className="absolute bottom-[-16rem] left-[35%] h-[38rem] w-[38rem] rounded-full bg-neon-lime/10 blur-3xl"
        />
        <div className="grid-overlay absolute inset-0 animate-grid-pulse" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div data-page-shell className="relative z-10">
        {children}
      </div>
    </main>
  );
}
