import type { HTMLAttributes, ReactNode } from "react";

export function Shell({
	children,
	className = "",
	as: Tag = "div",
	...rest
}: {
	children: ReactNode;
	className?: string;
	as?: "div" | "section" | "nav" | "header" | "footer" | "main";
} & HTMLAttributes<HTMLElement>) {
	return (
		<Tag className={["shell", className].filter(Boolean).join(" ")} {...rest}>
			{children}
		</Tag>
	);
}
