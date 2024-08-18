/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        frankRuhle: ["'Frank Ruhl Libre', serif"]
      },

      animation: {
				fade: 'fadeIn 1s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: .25 },
					to: { opacity: 1 },
				},
			},

      backgroundImage: {
        'parallax': 'url(../images/astronomy1.jpg)'
      },
    },
  },
  plugins: [],
}
