# `@fundoubler/ui`

Shared FunDoubler design primitives for sibling apps (homepage, shop, live).

Brand guidelines: [fundoubler.com/style-guide](https://fundoubler.com/style-guide)

## Install

### From GitHub

```bash
pnpm add github:FunDoubler/fundoubler-ui
# or
npm install github:FunDoubler/fundoubler-ui
# or
yarn add github:FunDoubler/fundoubler-ui
```

In `package.json`:

```json
"@fundoubler/ui": "github:FunDoubler/fundoubler-ui"
```

### Local sibling clone

```json
"@fundoubler/ui": "file:../fundoubler-ui"
```

## Usage

```tsx
import { AppIcon, BrandMark, Button, Eyebrow, Shell } from "@fundoubler/ui";
import {
	ControlButton,
	brandPrimaryButtonProps,
} from "@fundoubler/ui/controls";
import "@fundoubler/ui/styles/tokens.css";
import "@fundoubler/ui/styles/controls.css";

export default function Layout({ children }) {
	return <body className="fd-theme">{children}</body>;
}
```

Next.js consumers should set `transpilePackages: ["@fundoubler/ui"]`.

Brand images are bundled with the components. Use `BrandMark` and `AppIcon` directly; no copy into `public/` is required for those.

Raw files are still available if you need them outside React:

- `@fundoubler/ui/assets/logo.svg`
- `@fundoubler/ui/assets/logo-wordmark-white.png`
- `@fundoubler/ui/assets/logo-wordmark-purple.png`
- `@fundoubler/ui/assets/app-icon.png`

- Marketing CTAs: `Button` (pill styles from `tokens.css`)
- Product controls: `ControlButton` + `.btn*` classes from `controls.css`

## Style guide

Mount the living brand catalog in any Next.js app:

```tsx
import { StyleGuide } from "@fundoubler/ui/style-guide";
import "@fundoubler/ui/styles/style-guide.css";

export default function StyleGuidePage() {
	return (
		<main className="fd-theme fd-style-guide">
			<StyleGuide />
		</main>
	);
}
```

Optional host chrome: set `--sg-sticky-top` (for example to your site header height) so the in-page subnav sticks below it.
