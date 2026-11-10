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
import { BrandMark, Button, Eyebrow, Shell } from "@fundoubler/ui";
import { ControlButton, brandPrimaryButtonProps } from "@fundoubler/ui/controls";
import "@fundoubler/ui/styles/tokens.css";
import "@fundoubler/ui/styles/controls.css";
```

Next.js consumers should set `transpilePackages: ["@fundoubler/ui"]`.

Wrap marketing pages in `.fd-theme` (or nest under an element with that class). Copy brand assets from the package into each app’s `public/` folder so `BrandMark` (and app icons) can load via Next Image:

| Package export | Copy to |
| -------------- | ------- |
| `@fundoubler/ui/assets/logo.svg` | `public/logo.svg` |
| `@fundoubler/ui/assets/logo-wordmark-white.png` | `public/logo-wordmark-white.png` |
| `@fundoubler/ui/assets/logo-wordmark-purple.png` | `public/logo-wordmark-purple.png` |
| `@fundoubler/ui/assets/app-icon.png` | `public/marketing/app-icon.png` (or your app icon path) |

- Marketing CTAs: `Button` (pill styles from `tokens.css`)
- Product controls: `ControlButton` + `.btn*` classes from `controls.css`
