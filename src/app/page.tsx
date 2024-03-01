"use client"
import Header from "@/components/Header";
import NewsBoard from "@/components/Newsboard";
import TypewriterEffectSmoothDemo from "@/components/Typewriter";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <BackgroundGradientAnimation>
   
    <div>
      <TypewriterEffectSmoothDemo />
    <Header />
    <div id="news">
      <NewsBoard />
    </div>
    </div>
    </BackgroundGradientAnimation>
    </>
  );
}
