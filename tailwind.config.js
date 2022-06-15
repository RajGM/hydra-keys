module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#2F2E41',
          'primary-content': '#FFFFFF',
          '--btn-text-case': 'capitalize',
          secondary: '#5F5AB4',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#C27501',
          'primary-content': '#F1F1F1',
          '--btn-text-case': 'capitalize',
          secondary: '#5F5AB4',
        },
      },
    ],
  },
}
