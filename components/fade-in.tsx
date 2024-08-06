"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function FadeIn({
  children,
  className,
  state,
  duration = 0.4,
}: {
  children: React.ReactNode;
  className?: string;
  state: boolean;
  duration?: number;
}) {
  return (
    <AnimatePresence>
      {state && (
        <motion.div
          className={className}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
