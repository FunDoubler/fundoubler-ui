import Image from "next/image";
import { AppIcon } from "../components/AppIcon";
import { BrandMark } from "../components/BrandMark";
import { Button } from "../components/Button";
import { Eyebrow } from "../components/Eyebrow";
import { Shell } from "../components/Shell";
import { brandAssets } from "./assets";
import { Copyable } from "./Copyable";
import { Downloadable } from "./Downloadable";
import { InstallTabs } from "./InstallTabs";
import {
	colorTokens,
	radiusTokens,
	setupSteps,
	shellRule,
	styleGuideNav,
	typeSamples,
} from "./tokens";

function SectionIntro({
	eyebrow,
	title,
	description,
}: {
	eyebrow: string;
	title: string;
	description: string;
}) {
	return (
		<header className="sg-section__intro">
			<Eyebrow>{eyebrow}</Eyebrow>
			<h2>{title}</h2>
			<p>{description}</p>
		</header>
	);
}

export function StyleGuide() {
	return (
		<div className="sg">
			<div className="sg-nav-wrap shell">
				<nav className="sg-nav" aria-label="Style guide sections">
					{styleGuideNav.map((item) => (
						<a key={item.href} href={item.href}>
							{item.label}
						</a>
					))}
				</nav>
			</div>

			<div className="sg-hero shell">
				<Eyebrow>@fundoubler/ui</Eyebrow>
				<p>
					Living brand guidelines for FunDoubler: colors, typography,
					components, and assets from the shared UI package. Use this page as
					the reference when building or reviewing product and marketing
					surfaces.
				</p>
			</div>

			<section id="install" className="sg-section shell">
				<SectionIntro
					eyebrow="Package"
					title="Install"
					description="Install from GitHub (FunDoubler/fundoubler-ui), transpile in Next.js, import tokens, and wrap the app in .fd-theme."
				/>
				<InstallTabs />
				<div className="sg-install-steps">
					{setupSteps.map((step) => (
						<article key={step.id} className="sg-install-card">
							<strong>{step.label}</strong>
							<Copyable value={step.copy} label={`Copy ${step.label}`}>
								<code>{step.copy}</code>
							</Copyable>
						</article>
					))}
				</div>
			</section>

			<section id="colors" className="sg-section shell">
				<SectionIntro
					eyebrow="Tokens"
					title="Colors"
					description="Theme tokens from tokens.css. Click a hex or variable name to copy."
				/>
				<div className="sg-swatch-grid">
					{colorTokens.map((token) => {
						const isBorder = token.variable === "--border";
						return (
							<article key={token.variable} className="sg-swatch">
								<div
									className="sg-swatch__chip"
									style={{ background: `var(${token.variable})` }}
									aria-hidden="true"
								/>
								<div className="sg-swatch__meta">
									<strong>{token.name}</strong>
									<Copyable
										value={token.variable}
										label={`Copy ${token.variable}`}
									>
										<code>{token.variable}</code>
									</Copyable>
									{token.note && !isBorder ? (
										<span className="sg-swatch__note">{token.note}</span>
									) : null}
									{isBorder && token.note ? (
										<Copyable value={token.note} label="Copy border mix">
											<code className="sg-swatch__mix">{token.note}</code>
										</Copyable>
									) : (
										<Copyable value={token.hex} label={`Copy ${token.hex}`}>
											<code>{token.hex}</code>
										</Copyable>
									)}
								</div>
							</article>
						);
					})}
				</div>
			</section>

			<section id="typography" className="sg-section shell">
				<SectionIntro
					eyebrow="Type"
					title="Typography"
					description="Nunito for headings, Nunito Sans for body. Loaded via next/font as --font-heading and --font-body."
				/>
				<div className="sg-type-list">
					{typeSamples.map((sample) => (
						<article key={sample.id} className="sg-type-row">
							<div className="sg-type-row__preview">
								{sample.id === "h1" ? <h1>{sample.sample}</h1> : null}
								{sample.id === "h2" ? <h2>{sample.sample}</h2> : null}
								{sample.id === "h3" ? <h3>{sample.sample}</h3> : null}
								{sample.id === "body" ? <p>{sample.sample}</p> : null}
								{sample.id === "eyebrow" ? (
									<Eyebrow>{sample.sample}</Eyebrow>
								) : null}
							</div>
							<div className="sg-type-row__meta">
								<strong>{sample.label}</strong>
								<span>{sample.font}</span>
								<span>{sample.detail}</span>
								<Copyable
									value={sample.copy}
									label={`Copy ${sample.label} CSS`}
								>
									<code>Copy CSS</code>
								</Copyable>
							</div>
						</article>
					))}
				</div>
			</section>

			<section id="radii" className="sg-section shell">
				<SectionIntro
					eyebrow="Shape"
					title="Radii and layout"
					description="Corner radii and the shared .shell content width."
				/>
				<div className="sg-radius-grid">
					{radiusTokens.map((token) => (
						<article key={token.variable} className="sg-radius-card">
							<div
								className="sg-radius-card__shape"
								style={{ borderRadius: `var(${token.variable})` }}
								aria-hidden="true"
							/>
							<strong>{token.name}</strong>
							<Copyable value={token.variable} label={`Copy ${token.variable}`}>
								<code>{token.variable}</code>
							</Copyable>
							<Copyable value={token.value} label={`Copy ${token.value}`}>
								<code>{token.value}</code>
							</Copyable>
						</article>
					))}
				</div>
				<article className="sg-shell-card">
					<strong>Shell</strong>
					<p>
						Centered content wrapper used by layout and the Shell component.
					</p>
					<Copyable value={shellRule} label="Copy shell CSS">
						<code>{shellRule}</code>
					</Copyable>
				</article>
			</section>

			<section id="components" className="sg-section shell">
				<SectionIntro
					eyebrow="Package"
					title="Components"
					description="Live demos of everything exported from @fundoubler/ui."
				/>

				<div className="sg-component-stack">
					<article className="sg-component">
						<div className="sg-component__head">
							<h3>BrandMark</h3>
							<Copyable
								value={`import { BrandMark } from "@fundoubler/ui";\n\n<BrandMark />\n<BrandMark variant="wordmark-dark" />\n<BrandMark variant="wordmark-light" />`}
								label="Copy BrandMark usage"
							>
								<code>Copy usage</code>
							</Copyable>
						</div>
						<div className="sg-component__row sg-component__row--brand">
							<div className="sg-component__demo">
								<span className="sg-label">mark</span>
								<BrandMark />
							</div>
							<div className="sg-component__demo">
								<span className="sg-label">wordmark-dark</span>
								<BrandMark variant="wordmark-dark" />
							</div>
							<div className="sg-component__demo sg-component__demo--dark">
								<span className="sg-label">wordmark-light</span>
								<BrandMark variant="wordmark-light" />
							</div>
						</div>
					</article>

					<article className="sg-component">
						<div className="sg-component__head">
							<h3>Button</h3>
							<Copyable
								value={`import { Button } from "@fundoubler/ui";\n\n<Button>Primary</Button>\n<Button dark>Dark</Button>\n<Button secondary>Secondary</Button>\n<Button className="button--ghost">Ghost</Button>\n<Button showArrow href="/contact-us">Link</Button>`}
								label="Copy Button usage"
							>
								<code>Copy usage</code>
							</Copyable>
						</div>
						<div className="sg-component__row">
							<Button type="button">Primary</Button>
							<Button type="button" dark>
								Dark
							</Button>
							<Button type="button" secondary>
								Secondary
							</Button>
							<div className="sg-component__demo sg-component__demo--dark sg-component__demo--inline">
								<Button type="button" className="button--ghost">
									Ghost
								</Button>
							</div>
							<Button type="button" showArrow>
								With arrow
							</Button>
							<Button type="button" disabled>
								Disabled
							</Button>
							<Button href="/contact-us" showArrow>
								As link
							</Button>
						</div>
					</article>

					<article className="sg-component">
						<div className="sg-component__head">
							<h3>Eyebrow</h3>
							<Copyable
								value={`import { Eyebrow } from "@fundoubler/ui";\n\n<Eyebrow>Section label</Eyebrow>`}
								label="Copy Eyebrow usage"
							>
								<code>Copy usage</code>
							</Copyable>
						</div>
						<div className="sg-component__row">
							<Eyebrow>Section label</Eyebrow>
						</div>
					</article>

					<article className="sg-component">
						<div className="sg-component__head">
							<h3>Shell</h3>
							<Copyable
								value={`import { Shell } from "@fundoubler/ui";\n\n<Shell>\n  Content\n</Shell>`}
								label="Copy Shell usage"
							>
								<code>Copy usage</code>
							</Copyable>
						</div>
						<div className="sg-component__shell-demo">
							<Shell className="sg-shell-demo">
								<p>
									Shell constrains content to min(1120px, calc(100% - 40px)).
								</p>
							</Shell>
						</div>
					</article>

					<article className="sg-component">
						<div className="sg-component__head">
							<h3>AppIcon</h3>
							<Copyable
								value={`import { AppIcon } from "@fundoubler/ui";\n\n<AppIcon size={64} />`}
								label="Copy AppIcon usage"
							>
								<code>Copy usage</code>
							</Copyable>
						</div>
						<div className="sg-component__row">
							<AppIcon size={64} />
							<AppIcon size={40} />
						</div>
					</article>

					<article className="sg-component">
						<div className="sg-component__head">
							<h3>Text link</h3>
							<Copyable
								value={`<a className="text-link" href="/about-us">About FunDoubler</a>`}
								label="Copy text-link usage"
							>
								<code>Copy usage</code>
							</Copyable>
						</div>
						<div className="sg-component__row">
							<a className="text-link" href="/about-us">
								About FunDoubler
							</a>
						</div>
					</article>
				</div>
			</section>

			<section id="images" className="sg-section shell">
				<SectionIntro
					eyebrow="Assets"
					title="Images"
					description="Prefer BrandMark and AppIcon components. Raw files are available to download when you need them outside React."
				/>
				<div className="sg-asset-grid">
					{brandAssets.map((asset) => (
						<article key={asset.id} className="sg-asset">
							<div
								className={[
									"sg-asset__preview",
									"sg-asset__preview--contain",
									asset.darkPreview ? "sg-asset__preview--dark" : "",
								]
									.filter(Boolean)
									.join(" ")}
							>
								<Image
									src={asset.src}
									alt={asset.label}
									width={asset.fileName.endsWith(".svg") ? 80 : 320}
									height={asset.fileName.endsWith(".svg") ? 80 : 120}
								/>
							</div>
							<strong>{asset.label}</strong>
							<Downloadable
								href={asset.src.src}
								fileName={asset.fileName}
								label={asset.label}
							/>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
