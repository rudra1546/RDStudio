import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.12)",
  enableTilt = true,
  isPopular = false,
  isFeatured = false,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position inside card (px)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth tilt springs
  const tiltX = useSpring(0, { stiffness: 260, damping: 24 });
  const tiltY = useSpring(0, { stiffness: 260, damping: 24 });

  const rotateX = useTransform(tiltY, [-0.5, 0.5], enableTilt ? [3.5, -3.5] : [0, 0]);
  const rotateY = useTransform(tiltX, [-0.5, 0.5], enableTilt ? [-3.5, 3.5] : [0, 0]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    if (enableTilt) {
      tiltX.set(x / rect.width - 0.5);
      tiltY.set(y / rect.height - 0.5);
    }
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl transition-all duration-300 ${
        isPopular
          ? "bg-gradient-to-b from-[#181628] via-[#14141F] to-[#0F0E17] border-2 border-[#8B5CF6] shadow-[0_16px_48px_-8px_rgba(139,92,246,0.3),inset_0_1px_1px_rgba(245,243,255,0.15)]"
          : isFeatured
            ? "bg-gradient-to-b from-[#161522] via-[#13131A] to-[#0E0E14] border border-[#8B5CF6]/40 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(245,243,255,0.08)]"
            : "bg-gradient-to-b from-[#171622]/90 via-[#13131A]/95 to-[#0F0F16] border border-[#24222F] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(245,243,255,0.06)]"
      } ${className}`}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(420px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`,
          ),
        }}
      />

      {/* Luminous Interactive Border Highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(320px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.4), transparent 70%)`,
          ),
          maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Subtle Sheen Highlight on Hover */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full transition-transform duration-1000 ${
          isHovered ? "translate-x-full" : ""
        }`}
      />

      {/* Card Content Container */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
