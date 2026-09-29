export const PARRY_STYLES = {
    attacker: {
        ring: "ring-sky-500",
        dot: "bg-sky-500",
        text: "text-sky-600 dark:text-sky-400",
    },
    defender: {
        ring: "ring-rose-500",
        dot: "bg-rose-500",
        text: "text-rose-600 dark:text-rose-400",
    },
} as const;

export type ParryRole = keyof typeof PARRY_STYLES;