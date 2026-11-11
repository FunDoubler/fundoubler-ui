"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type CopyableProps = {
	value: string;
	children: ReactNode;
	className?: string;
	label?: string;
};

export function Copyable({
	value,
	children,
	className = "",
	label = "Copy",
}: CopyableProps) {
	const [copied, setCopied] = useState(false);
	const timeoutRef = useRef<number | null>(null);

	useEffect(() => {
		return () => {
			if (timeoutRef.current !== null) {
				window.clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			if (timeoutRef.current !== null) {
				window.clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = window.setTimeout(() => {
				setCopied(false);
				timeoutRef.current = null;
			}, 1400);
		} catch {
			setCopied(false);
		}
	}

	return (
		<button
			type="button"
			className={["sg-copy", className].filter(Boolean).join(" ")}
			onClick={handleCopy}
			aria-label={copied ? "Copied" : label}
			title={copied ? "Copied" : label}
		>
			<span className="sg-copy__content">{children}</span>
			<span className="sg-copy__status" aria-live="polite">
				{copied ? "Copied" : "Copy"}
			</span>
		</button>
	);
}
