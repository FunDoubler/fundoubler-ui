# `@fundoubler/ui`

Shared FunDoubler design primitives for sibling apps (homepage, shop, live).

## Usage

```bash
# In the consuming app package.json
"@fundoubler/ui": "file:../fundoubler-ui"
```

```tsx
import { BrandMark, Button, Eyebrow, Shell } from "@fundoubler/ui";
import { ControlButton, brandPrimaryButtonProps } from "@fundoubler/ui/controls";
import "@fundoubler/ui/styles/tokens.css";
import "@fundoubler/ui/styles/controls.css";
```

Wrap marketing pages in `.fd-theme` (or nest under an element with that class). Copy `assets/logo.svg` to each app’s `public/logo.svg` so `BrandMark` can load it via Next Image. Wordmark variants also need `public/logo-wordmark-white.png` and `public/logo-wordmark-purple.png`.

- Marketing CTAs: `Button` (pill styles from `tokens.css`)
- Product controls: `ControlButton` + `.btn*` classes from `controls.css`
