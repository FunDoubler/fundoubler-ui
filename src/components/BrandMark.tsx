import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

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
	light: boolean
): BrandVariant {
	if (variant) return variant;
	return light ? "wordmark-light" : "mark";
}

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
	const classes = [
		"brand",
		light || resolved === "wordmark-light" ? "brand--light" : "",
		isWordmark ? "brand--wordmark" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	// Intrinsic PNG size is 1373×148; keep that ratio for next/image.
	const image =
		resolved === "wordmark-light"
			? {
					src: "/logo-wordmark-white.png",
					width: 1373,
					height: 148,
					alt: "FunDoubler",
				}
			: resolved === "wordmark-dark"
				? {
						src: "/logo-wordmark-purple.png",
						width: 1373,
						height: 148,
						alt: "FunDoubler",
					}
				: {
						src: "/logo.svg",
						width: 40,
						height: 40,
						alt: "FunDoubler",
					};

	return (
		<Link
			className={classes}
			href={href}
			aria-label="FunDoubler home"
			{...rest}
		>
			<Image
				src={image.src}
				alt={image.alt}
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
