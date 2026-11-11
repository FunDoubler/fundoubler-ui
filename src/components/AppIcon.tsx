import Image from "next/image";
import type { ComponentProps } from "react";
import appIcon from "../../assets/app-icon.png";

type AppIconProps = {
	size?: number;
	priority?: boolean;
	className?: string;
	alt?: string;
} & Omit<
	ComponentProps<typeof Image>,
	"src" | "alt" | "width" | "height" | "priority" | "className"
>;

export function AppIcon({
	size = 64,
	priority = false,
	className = "",
	alt = "FunDoubler",
	...rest
}: AppIconProps) {
	return (
		<Image
			src={appIcon}
			alt={alt}
			width={size}
			height={size}
			priority={priority}
			className={className}
			{...rest}
		/>
	);
}
