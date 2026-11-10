import type { ButtonHTMLAttributes, CSSProperties } from "react";

type ButtonVariant =
	| "primary"
	| "secondary"
	| "outline"
	| "ghost"
	| "danger"
	| "danger-outline"
	| "outline-danger"
	| "danger-soft"
	| "ghost-danger"
	| "inverse"
	| "outline-inverse"
	| "brand"
	| "muted"
	| "link"
	| "link-danger"
	| "bare";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "icon";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
	primary: "btn-primary",
	secondary: "btn-secondary",
	outline: "btn-outline",
	ghost: "btn-ghost",
	danger: "btn-danger",
	"danger-outline": "btn-danger-outline",
	"outline-danger": "btn-outline-danger",
	"danger-soft": "btn-danger-soft",
	"ghost-danger": "btn-ghost-danger",
	inverse: "btn-inverse",
	"outline-inverse": "btn-outline-inverse",
	brand: "btn-brand",
	muted: "btn-muted",
	link: "btn-link",
	"link-danger": "btn-link-danger",
	bare: "btn-bare",
};

const SIZE_CLASS: Record<ButtonSize, string> = {
	xs: "btn-xs",
	sm: "btn-sm",
	md: "btn-md",
	lg: "btn-lg",
	icon: "btn-icon",
};

function cx(...parts: Array<string | false | null | undefined>): string {
	return parts.filter(Boolean).join(" ");
}

export type ControlButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
};

export function ControlButton({
	variant = "primary",
	size,
	className,
	type = "button",
	...props
}: ControlButtonProps) {
	return (
		<button
			type={type}
			className={cx(
				"btn",
				VARIANT_CLASS[variant],
				size ? SIZE_CLASS[size] : null,
				className
			)}
			{...props}
		/>
	);
}

export function brandPrimaryButtonProps(
	primaryColor: string | null | undefined,
	extraClassName?: string
): { className: string; style?: CSSProperties } {
	if (primaryColor?.trim()) {
		const color = primaryColor.trim();
		return {
			className: cx("btn", "btn-brand", extraClassName),
			style: {
				backgroundColor: color,
				borderColor: color,
				["--fd-btn-ring" as string]: color,
			},
		};
	}
	return {
		className: cx("btn", "btn-primary", extraClassName),
	};
}
