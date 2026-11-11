import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import logoMark from "../../assets/logo.svg";
import wordmarkDark from "../../assets/logo-wordmark-purple.png";
import wordmarkLight from "../../assets/logo-wordmark-white.png";

type BrandVariant = "mark" | "wordmark-light" | "wordmark-dark";

type BrandMarkProps = {
	href?: string;
	light?: boolean;
	variant?: BrandVariant;
	priority?: boolean;
	className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

function resolveVariant(
	variant: BrandVariant | undefined,
	light: boolean,
): BrandVariant {
	if (variant) return variant;
	return light ? "wordmark-light" : "mark";
}

const images = {
	mark: { src: logoMark, width: 40, height: 40 },
	"wordmark-light": { src: wordmarkLight, width: 1373, height: 148 },
	"wordmark-dark": { src: wordmarkDark, width: 1373, height: 148 },
} as const;

export function BrandMark({
	href = "/",
	light = false,
	variant,
	priority = false,
	className = "",
	...rest
}: BrandMarkProps) {
	const resolved = resolveVariant(variant, light);
	const isWordmark = resolved !== "mark";
	const image = images[resolved];
	const classes = [
		"brand",
		light || resolved === "wordmark-light" ? "brand--light" : "",
		isWordmark ? "brand--wordmark" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<Link
			className={classes}
			href={href}
			aria-label="FunDoubler home"
			{...rest}
		>
			<Image
				src={image.src}
				alt="FunDoubler"
				width={image.width}
				height={image.height}
				priority={priority}
			/>
			{resolved === "mark" ? (
				<span className="brand-name">FunDoubler</span>
			) : null}
		</Link>
	);
}
