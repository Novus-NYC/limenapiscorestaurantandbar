import type { Config } from "tailwindcss"

/**
 * Design tokens.
 *
 * Motion primitives (easings, durations, "heavy but slow") are transplanted from the
 * hubtown template profile. The palette is not — it's sampled from the restaurant's own
 * storefront, dining room, and logo, so the ice-blue-on-navy of the reference becomes
 * cream-and-gold on near-black burgundy.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /*
       * Light, warm palette drawn from the actual dining room — wood, white
       * wainscoting, brick, and the crimson logo. Every value below was measured
       * against the bone base rather than picked by eye; the ratios are noted so
       * nobody "brightens" one back into failing contrast.
       */
      colors: {
        /** Base surface. Warm off-white, not a cold grey. */
        bone: {
          DEFAULT: "#F7F3EC",
          50: "#FDFBF8",
          200: "#EFE9DE",
          300: "#E3DBCB",
        },
        /** Primary text. 16.7:1 on bone. */
        ink: {
          DEFAULT: "#1A1210",
          800: "#2C201C",
          700: "#4A3833",
        },
        crimson: {
          /** The logo red. For fills only — as text on bone it measures 4.44:1. */
          DEFAULT: "#E0121B",
          /** Darkened for crimson *text* and links: 6.10:1 on bone. */
          ink: "#B80E16",
        },
        /**
         * The storefront sign, darkened for legibility. The literal signage gold
         * (#C9A227) measures 3.63:1 on bone and fails; this reads as the same
         * antique gold at 5.35:1.
         */
        gold: {
          DEFAULT: "#7A6115",
          /** Decorative only — rules, borders, wash. Never text. */
          light: "#C9A227",
        },
        /** The awning and entry door. 10.7:1 — the strongest accent available. */
        burgundy: "#6E1220",
        /** The dining room's single accent wall. Used sparingly. 6.98:1. */
        sage: "#3F5A31",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        /** Micro-labels. Hubtown's "spec sheet" voice — it reads beautifully on a menu. */
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid display scale. Clamps keep the cinematic feel without breaking mobile.
        "display-xl": ["clamp(3rem, 11vw, 9.5rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 7vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      transitionTimingFunction: {
        // Straight from the reference's motion primitives.
        cinematic: "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
      },
      transitionDuration: {
        micro: "100ms",
        cinematic: "1000ms",
      },
      maxWidth: {
        prose: "68ch",
        shell: "88rem",
      },
      borderRadius: {
        // The reference used exactly two radii: square, and one soft corner.
        card: "10px",
      },
      keyframes: {
        // Reference vocabulary: column/row grows, stroke draw, letter reveal.
        colGrow: { "0%": { transform: "scaleY(0)" }, "100%": { transform: "scaleY(1)" } },
        rowGrow: { "0%": { transform: "scaleX(0)" }, "100%": { transform: "scaleX(1)" } },
        draw: { "0%": { strokeDashoffset: "1" }, "100%": { strokeDashoffset: "0" } },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "col-grow": "colGrow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "row-grow": "rowGrow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        drift: "drift 6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
}
export default config
