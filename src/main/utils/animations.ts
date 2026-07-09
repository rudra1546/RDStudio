export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE as unknown as number[],
      delay: i * 0.06,
    },
  }),
};