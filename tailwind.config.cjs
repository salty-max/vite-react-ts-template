/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const defaultConfig = require("tailwindcss/defaultConfig")
const colorSystem = require("./colors.json")

// eslint-disable-next-line no-undef
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		backgroundColor: {
			transparent: "transparent",
		},
		borderColor: {
			transparent: "transparent",
		},
		outlineColor: ({ theme }) => ({
			...theme("borderColor"),
		}),
		ringColor: ({ theme }) => ({
			...theme("borderColor"),
		}),
		boxShadowColor: ({ theme }) => ({
			...theme("color"),
			"tooltip-highlight": "rgba(82,115,232,0.2)",
			"tooltip-error": "rgba(234,67,53,0.2)",
			"tooltip-success": "rgba(54,217,163,0.2)",
			"tooltip-info-light": "rgba(235,250,255,0.2)",
		}),
		textColor: {
			transparent: "transparent",
		},
		caretColor: ({ theme }) => ({
			...theme("textColor"),
		}),
		gradientColorStops: ({ theme }) => ({
			...theme("backgroundColor"),
			black: colorSystem.base.black,
		}),
		colors: {
			transparent: "transparent",
			current: "currentColor",
			base: colorSystem.base.white,
		},
		spacing: {
			px: "1px",
			0: "0px",
			0.25: "2px",
			0.5: "4px",
			0.75: "6px",
			1: "8px",
			1.25: "10px",
			1.5: "12px",
			1.75: "14px",
			2: "16px",
			2.5: "20px",
			3: "24px",
			4: "32px",
			4.5: "36px",
			5: "40px",
			6: "48px",
			6.5: "52px",
			7: "56px",
			8: "64px",
			9: "72px",
			10: "80px",
			11: "88px",
			12: "96px",
			12.5: "100px",
			13: "104px",
			14: "112px",
			15: "120px",
			16: "128px",
			17: "136px",
			18: "144px",
			19: "152px",
			20: "160px",
			24: "192px",
			25: "200px",
			27: "216px",
			29: "232px",
			30: "240px",
			32: "256px",
			33: "264px",
			34: "272px",
			37: "296px",
			44: "352px",
			46: "368px",
			52: "416px",
			55: "440px",
			58: "464px",
			68: "544px",
			70: "560px",
			82: "656px",
			94: "752px",
			106: "848px",
		},
		minWidth: ({ theme }) => ({
			...theme("spacing"),
		}),
		maxWidth: ({ theme }) => ({
			...theme("spacing"),
			full: "100%",
			max: "max-content",
			fit: "fit-content",
		}),
		fontSize: {
			"heading-xl": ["48px", "64px"],
			"heading-l": ["32px", "40px"],
			"heading-m": ["24px", "32px"],
			"heading-s": ["20px", "24px"],
			"body-xl": ["18px", "24px"],
			"body-l": ["16px", "24px"],
			"body-m": ["14px", "20px"],
			"body-s": ["12px", "16px"],
			button: ["16px", "24px"],
			label: ["14px", "24px"],
			"icon-xl": ["32px", "16px"],
			"icon-l": ["16px", "16px"],
			"icon-m": ["14px", "16px"],
			"icon-s": ["12px", "16px"],
		},
		letterSpacing: {
			label: "2px",
		},
		borderRadius: {
			0: "0px",
			0.5: "4px",
			1: "8px",
			1.5: "12px",
			2: "16px",
			3: "24px",
			4: "32px",
			5: "40px",
			full: "9999px",
		},
		screens: {
			...defaultConfig.theme.screens,
		},
		container: {
			center: true,
			padding: "16px",
		},
		boxShadow: {
			"card-drag": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
			card: "0 8px 20px 0 rgba(115, 112, 110, 0.08)",
			modal: "0 16px 32px 0 rgba(115, 112, 110, 0.16)",
			dropdown: "0 8px 24px 0 rgba(115, 112, 110, 0.12)",
			hover: "0 16px 32px 0 rgba(115, 112, 110, 0.16)",
			icon: "0 0 2px 0 rgba(0, 0, 0, 0.0811)",
			"loading-bar": "0 0 5px rgba(82, 115, 232, 1)",
			"side-panel": "-8px 4px 24px 0 rgba(179, 175, 171, 1)",
			none: "0 0 #0000",
		},
		dropShadow: {
			funnel: "0 8px 20px rgba(115, 112, 110, 0.08)",
		},
		animation: {
			...defaultConfig.theme.animation,
			"loading-bar": "loading-bar 22s ease-out",
		},
		extend: {
			keyframes: {
				"progress-infinite": {
					"0%": { transform: "translateX(-100%)", width: "100%" },
					"100%": { transform: "translateX(100%)", width: "100%" },
				},
				"loading-bar": {
					"0%": {
						width: "0%",
					},
					"9%": {
						width: "45%",
					},
					"99%": {
						width: "80%",
					},
					"100%": {
						width: "100%",
					},
				},
			},
			transitionDuration: {
				250: "250ms",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		plugin(function ({ addVariant, e }) {
			/**
			 * This custom plugin adds an utility class which lets us apply a class on each descendant of an element.
			 * For instance, this allows us to use the class "descendant:stroke-red-500" which will apply the "stroke-red-500" class on each descendant of an element.
			 */
			addVariant("descendant", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					const newClass = e(`descendant${separator}${className}`)
					return `.${newClass} *`
				})
			})
			/**
			 * This custom plugin adds an utility class which lets us apply a class on each direct child of an element.
			 * For instance, this allows us to use the class "children:stroke-red-500" which will apply the "stroke-red-500" class on each direct child element.
			 */
			addVariant("children", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					const newClass = e(`children${separator}${className}`)
					return `.${newClass} > *`
				})
			})
		}),
	],
}
