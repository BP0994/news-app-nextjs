"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "this",
    },
    {
      text: "app",
    },
    {
      text: "with",
    },
    {
      text: "NEXT JS.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Hi, Im Bhupendra pal. This project is news-app.
      </p>
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
