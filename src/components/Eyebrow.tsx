import type { ReactNode } from "react";

export function Eyebrow({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<p className={["eyebrow", className].filter(Boolean).join(" ")}>
			{children}
		</p>
	);
}
