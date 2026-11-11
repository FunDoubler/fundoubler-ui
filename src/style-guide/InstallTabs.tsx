"use client";

import { useId, useState } from "react";
import { Copyable } from "./Copyable";
import { installCommands } from "./tokens";

export function InstallTabs() {
	const [activeId, setActiveId] = useState<
		(typeof installCommands)[number]["id"]
	>(installCommands[0].id);
	const baseId = useId();
	const active =
		installCommands.find((item) => item.id === activeId) ?? installCommands[0];

	return (
		<div className="sg-tabs">
			<div className="sg-tabs__list" role="tablist" aria-label="Install method">
				{installCommands.map((item) => {
					const selected = item.id === active.id;
					return (
						<button
							key={item.id}
							type="button"
							role="tab"
							id={`${baseId}-${item.id}`}
							aria-selected={selected}
							aria-controls={`${baseId}-panel`}
							tabIndex={selected ? 0 : -1}
							className={[
								"sg-tabs__tab",
								selected ? "sg-tabs__tab--active" : "",
							]
								.filter(Boolean)
								.join(" ")}
							onClick={() => setActiveId(item.id)}
						>
							{item.label}
						</button>
					);
				})}
			</div>
			<div
				className="sg-tabs__panel"
				role="tabpanel"
				id={`${baseId}-panel`}
				aria-labelledby={`${baseId}-${active.id}`}
			>
				<Copyable
					value={active.command}
					label={`Copy ${active.label} install`}
					className="sg-tabs__copy"
				>
					<code>{active.command}</code>
				</Copyable>
			</div>
		</div>
	);
}
