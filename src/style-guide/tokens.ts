/**
 * Mirror of styles/tokens.css for the brand guidelines.
 * Update this list when tokens change.
 */

export type ColorToken = {
	name: string;
	variable: string;
	hex: string;
	note?: string;
};

export type RadiusToken = {
	name: string;
	variable: string;
	value: string;
};

export type TypeSample = {
	id: string;
	label: string;
	sample: string;
	font: string;
	detail: string;
	copy: string;
};

export const colorTokens: ColorToken[] = [
	{ name: "Primary", variable: "--primary", hex: "#142638" },
	{ name: "Primary soft", variable: "--primary-soft", hex: "#1a2740" },
	{ name: "Secondary / White", variable: "--secondary", hex: "#ffffff" },
	{ name: "Accent / Purple", variable: "--accent", hex: "#511b4c" },
	{ name: "Accent mid", variable: "--accent-mid", hex: "#7a3d72" },
	{ name: "Accent dark", variable: "--accent-dark", hex: "#3a1337" },
	{ name: "Cream", variable: "--cream", hex: "#f4f6f9" },
	{ name: "Orange", variable: "--orange", hex: "#ffb71e" },
	{ name: "Cyan", variable: "--cyan", hex: "#0ea5e9" },
	{ name: "Cyan deep", variable: "--cyan-deep", hex: "#0284c7" },
	{
		name: "Yellow",
		variable: "--yellow",
		hex: "#6ee7ff",
		note: "Cyan-tinted token name",
	},
	{ name: "Violet", variable: "--violet", hex: "#8d71ff" },
	{ name: "Peach", variable: "--peach", hex: "#ff8b63" },
	{ name: "Muted", variable: "--muted", hex: "#5b6b7c" },
	{
		name: "Border",
		variable: "--border",
		hex: "#142638",
		note: "color-mix(in srgb, var(--primary) 12%, transparent)",
	},
];

export const radiusTokens: RadiusToken[] = [
	{ name: "Media", variable: "--radius-media", value: "24px" },
	{ name: "Card", variable: "--radius-card", value: "20px" },
	{ name: "Control", variable: "--radius-control", value: "12px" },
];

export const typeSamples: TypeSample[] = [
	{
		id: "h1",
		label: "Heading 1",
		sample: "Turn the wait into shared play",
		font: "Nunito",
		detail: "clamp(2.2rem, 5vw, 3.4rem) / weight 800 / tracking -0.03em",
		copy: 'font-family: var(--font-heading), "Nunito", sans-serif;\nfont-size: clamp(2.2rem, 5vw, 3.4rem);\nfont-weight: 800;\nletter-spacing: -0.03em;',
	},
	{
		id: "h2",
		label: "Heading 2",
		sample: "One composition. Brand first.",
		font: "Nunito",
		detail: "clamp(1.75rem, 3.2vw, 2.45rem) / weight 800",
		copy: 'font-family: var(--font-heading), "Nunito", sans-serif;\nfont-size: clamp(1.75rem, 3.2vw, 2.45rem);\nfont-weight: 800;',
	},
	{
		id: "h3",
		label: "Heading 3",
		sample: "Section title",
		font: "Nunito",
		detail: "1.2rem / weight 800",
		copy: 'font-family: var(--font-heading), "Nunito", sans-serif;\nfont-size: 1.2rem;\nfont-weight: 800;',
	},
	{
		id: "body",
		label: "Body",
		sample:
			"FunDoubler turns downtime at live events into shared play that engages the entire audience.",
		font: "Nunito Sans",
		detail: "1.05rem / line-height 1.7 / color var(--primary)",
		copy: 'font-family: var(--font-body), "Nunito Sans", sans-serif;\nfont-size: 1.05rem;\nline-height: 1.7;\ncolor: var(--primary);',
	},
	{
		id: "eyebrow",
		label: "Eyebrow",
		sample: "Brand guidelines",
		font: "Nunito Sans",
		detail: "12px / weight 700 / tracking 0.14em / uppercase / accent",
		copy: "font-size: 12px;\nfont-weight: 700;\nletter-spacing: 0.14em;\ntext-transform: uppercase;\ncolor: var(--accent);",
	},
];

export const shellRule =
	"width: min(1120px, calc(100% - 40px));\nmargin-inline: auto;";

export const styleGuideNav = [
	{ href: "#install", label: "Install" },
	{ href: "#colors", label: "Colors" },
	{ href: "#typography", label: "Typography" },
	{ href: "#radii", label: "Radii" },
	{ href: "#components", label: "Components" },
	{ href: "#images", label: "Images" },
] as const;

export const installCommands = [
	{
		id: "pnpm",
		label: "pnpm",
		command: "pnpm add github:FunDoubler/fundoubler-ui",
	},
	{
		id: "npm",
		label: "npm",
		command: "npm install github:FunDoubler/fundoubler-ui",
	},
	{
		id: "yarn",
		label: "yarn",
		command: "yarn add github:FunDoubler/fundoubler-ui",
	},
	{
		id: "file",
		label: "Local",
		command: '"@fundoubler/ui": "file:../fundoubler-ui"',
	},
] as const;

export const setupSteps = [
	{
		id: "transpile",
		label: "Transpile in Next.js",
		copy: `// next.config.ts
const nextConfig = {
  transpilePackages: ["@fundoubler/ui"],
};`,
	},
	{
		id: "import",
		label: "Import tokens and components",
		copy: `import { AppIcon, BrandMark, Button, Eyebrow, Shell } from "@fundoubler/ui";
import "@fundoubler/ui/styles/tokens.css";

// Wrap the app in .fd-theme (for example on <body>)`,
	},
] as const;
