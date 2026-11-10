import type { ComponentProps, ReactNode } from "react";

type SharedProps = {
	dark?: boolean;
	secondary?: boolean;
	showArrow?: boolean;
	className?: string;
	children: ReactNode;
};

export type ButtonProps =
	| (SharedProps &
			Omit<ComponentProps<"button">, "className" | "children"> & {
				href?: undefined;
			})
	| (SharedProps &
			Omit<ComponentProps<"a">, "className" | "children"> & {
				href: string;
			});

function classes(dark: boolean, secondary: boolean, className: string) {
	return [
		"button",
		dark ? "button--dark" : "",
		secondary ? "button--secondary" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");
}

export function Button({
	dark = false,
	secondary = false,
	showArrow = true,
	className = "",
	children,
	...rest
}: ButtonProps) {
	const classNames = classes(dark, secondary, className);
	const content = (
		<>
			<span>{children}</span>
			{showArrow ? <span aria-hidden="true">↗</span> : null}
		</>
	);

	if ("href" in rest && typeof rest.href === "string") {
		const { href, ...anchorRest } = rest;
		return (
			<a className={classNames} href={href} {...anchorRest}>
				{content}
			</a>
		);
	}

	const buttonRest = rest as Omit<
		ComponentProps<"button">,
		"className" | "children"
	>;

	return (
		<button
			className={classNames}
			type={buttonRest.type ?? "button"}
			{...buttonRest}
		>
			{content}
		</button>
	);
}
