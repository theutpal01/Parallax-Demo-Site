export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: {
					light: "#F5F5F5",
					DEFAULT: "#121212",
					dark: "#000000",
				},
				primary: {
					light: "#F7CA50",
					DEFAULT: "#F7CA50",
					dark: "#F4BC1E",
				},
				secondary: {
					light: "#F4678F",
					DEFAULT: "#F25481",
					dark: "#F0386B",
				},
				tertiary: {
					light: "#CDF4F0",
					DEFAULT: "#B1EDE8",
					dark: "#ACECE7",
				},
			},
			fontFamily: {
				sans: ["'Clash Display'", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			borderRadius: {
				none: "0",
				"3xl": "2.2rem",
				full: "9999px",
			},
		},
	},
	plugins: [],
};
