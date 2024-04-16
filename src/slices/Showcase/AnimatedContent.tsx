"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = useRef(null);
  
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
     gsap.fromTo(container.current, {y: 100}, {
        y:0,
        ease: "power2.inOut",
        duration:1,
        scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=50%",
            toggleActions: "play pause resume reverse",
            markers: false,
            
        }
     })
    
  }, { scope: container });

  return <div ref={container}>{children}</div>;
}
