import { useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
};

export default function Counter({ to, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-40px",
  });

  const motionValue = useMotionValue(0);

  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
  });

  const rounded = useTransform(spring, (value) => Math.round(value).toString() + suffix);

  const [text, setText] = useState("0" + suffix);

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }

    return rounded.on("change", (value) => setText(value));
  }, [inView, to, motionValue, rounded]);

  return <span ref={ref}>{text}</span>;
}
