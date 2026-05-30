"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isGsapReady = false;

export function initializeGsap() {
  if (isGsapReady || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase, Flip);

  CustomEase.create("core-fluid", "M0,0 C0.22,1 0.36,1 1,1");
  CustomEase.create("core-snap", "M0,0 C0.2,0.8 0.2,1 1,1");

  gsap.config({
    nullTargetWarn: false
  });

  gsap.defaults({
    duration: 0.72,
    ease: "core-fluid"
  });

  ScrollTrigger.defaults({
    markers: false
  });

  isGsapReady = true;
}

if (typeof window !== "undefined") {
  initializeGsap();
}

export { CustomEase, Flip, gsap, ScrollTrigger, useGSAP };
