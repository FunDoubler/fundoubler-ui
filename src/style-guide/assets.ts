import type { StaticImageData } from "next/image";
import appIcon from "../../assets/app-icon.png";
import logoMark from "../../assets/logo.svg";
import wordmarkDark from "../../assets/logo-wordmark-purple.png";
import wordmarkLight from "../../assets/logo-wordmark-white.png";

export type StyleGuideAsset = {
	id: string;
	label: string;
	fileName: string;
	src: StaticImageData;
	darkPreview?: boolean;
};

export const brandAssets: StyleGuideAsset[] = [
	{
		id: "mark",
		label: "Mark",
		fileName: "logo.svg",
		src: logoMark,
	},
	{
		id: "wordmark-light",
		label: "Wordmark light",
		fileName: "logo-wordmark-white.png",
		src: wordmarkLight,
		darkPreview: true,
	},
	{
		id: "wordmark-dark",
		label: "Wordmark dark",
		fileName: "logo-wordmark-purple.png",
		src: wordmarkDark,
	},
	{
		id: "app-icon",
		label: "App icon",
		fileName: "app-icon.png",
		src: appIcon,
	},
];
