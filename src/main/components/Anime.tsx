import { motion, AnimatePresence } from "framer-motion";

interface GreetingAnimationProps {
  show: boolean;
  type: "success" | "error";
}

export default function GreetingAnimation({ show, type }: GreetingAnimationProps) {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            backdrop-blur-sm
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="
              bg-card
              border
              border-border
              rounded-2xl
              p-8
              shadow-[0_24px_60px_-10px_rgba(0,0,0,0.9)]
              flex
              flex-col
              items-center
              text-center
              w-[320px]
            "
            initial={{
              scale: 0.5,
              opacity: 0,
              y: 30,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <motion.div
              className="flex items-center gap-3"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span
                className="
                inline-flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#8B5CF6]
                to-[#5B21B6]
                text-white
                text-xl
                shadow-md
              "
              >
                ◆
              </span>

              <span className="text-2xl font-bold">
                RD Studio<span className="text-accent">.</span>
              </span>
            </motion.div>

            <motion.h2
              className="mt-6 text-xl font-bold"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {isSuccess ? "Message Sent!" : "Something went wrong"}
            </motion.h2>

            <motion.p
              className="text-muted-foreground mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {isSuccess
                ? "Thanks for reaching out. I'll get back to you soon."
                : "Please try again later."}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
