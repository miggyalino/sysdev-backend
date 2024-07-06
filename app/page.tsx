"use client";
import TypingAnimation from "@/components/TypingAnimation";
import { Button } from "@/components/ui/button";
import { STAGE_LINKS } from "@/constants";
import { delay, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-slate-900 flex flex-col gap-8 justify-center items-center">
      <TypingAnimation
        className="text-6xl xl:text-8xl max-w-4xl font-bold text-yellow-200"
        text="SysDev Back-end Assessment"
        duration={100}
      />
      <motion.p
        className="text-2xl xl:text-4xl text-purple-400 font-semibold"
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        Created by Jose Miguel Alino
      </motion.p>
      <motion.div
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="flex justify-center gap-4"
      >
        {STAGE_LINKS.map((link) => (
          <Button
            key={link.label}
            className="bg-slate-500 hover:bg-slate-400"
            size={"lg"}
            asChild
          >
            <Link href={link.link}>{link.label}</Link>
          </Button>
        ))}
      </motion.div>
    </main>
  );
}
