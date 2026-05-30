"use client";

import type { RefObject } from "react";
import { useRef } from "react";
import { gsap, initializeGsap, useGSAP } from "@/lib/gsap/initialize-gsap";

type ContextSafe = <TFunction extends (...args: any[]) => unknown>(callback: TFunction) => TFunction;

type CyberGsapTools<TElement extends HTMLElement> = Readonly<{
  gsap: typeof gsap;
  scope: RefObject<TElement | null>;
  context: ReturnType<typeof gsap.context>;
  contextSafe: ContextSafe;
}>;

type UseCyberGsapOptions<TElement extends HTMLElement> = Readonly<{
  scope?: RefObject<TElement | null>;
  dependencies?: ReadonlyArray<unknown>;
  revertOnUpdate?: boolean;
}>;

/**
 * Wraps GSAP's official React hook with CoreLMS defaults:
 * - plugin registration is client-only,
 * - selectors are scoped to the returned ref,
 * - animations are reverted automatically on route updates and unmounts.
 */
export function useCyberGsap<TElement extends HTMLElement = HTMLDivElement>(
  setup: (tools: CyberGsapTools<TElement>) => void | (() => void),
  options: UseCyberGsapOptions<TElement> = {}
) {
  const internalScope = useRef<TElement | null>(null);
  const scope = options.scope ?? internalScope;

  useGSAP(
    (context, contextSafe) => {
      initializeGsap();

      if (typeof window === "undefined") {
        return undefined;
      }

      const safe: ContextSafe = contextSafe ?? ((callback) => callback);

      return setup({
        gsap,
        scope,
        context,
        contextSafe: safe
      });
    },
    {
      scope,
      dependencies: [...(options.dependencies ?? [])],
      revertOnUpdate: options.revertOnUpdate ?? true
    }
  );

  return scope;
}
