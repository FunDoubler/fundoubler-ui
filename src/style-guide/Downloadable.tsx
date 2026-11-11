type DownloadableProps = {
	href: string;
	fileName: string;
	label: string;
	className?: string;
};

export function Downloadable({
	href,
	fileName,
	label,
	className = "",
}: DownloadableProps) {
	return (
		<a
			className={["sg-download", className].filter(Boolean).join(" ")}
			href={href}
			download={fileName}
			aria-label={`Download ${label}`}
			title={`Download ${fileName}`}
		>
			Download
		</a>
	);
}
