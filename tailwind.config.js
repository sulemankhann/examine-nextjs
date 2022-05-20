const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5E3B76',
        secondary: '#25A1AF',
        tertiary: '#6C757D',
        info: '#E2D9F3',
        danger: '#DC3545',
        light: '#F8F9FA',
        caution: '#FDEFEF',
        premium: '#FFC107',
        dark: '#212529',
      },
      fontFamily: {
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'mobile-h1': ['36px', { lineHeight: '48px' }],
        'mobile-h2': ['20px', { lineHeight: '25px' }],
        'mobile-h3': ['16px', { lineHeight: '20px' }],
        'mobile-h4': ['12px', { lineHeight: '16px' }],
        'web-h1': ['60px', { lineHeight: '75px' }],
        'web-h2': ['40px', { lineHeight: '55px' }],
        'web-h3': ['30px', { lineHeight: '36px' }],
        'web-h4': ['25px', { lineHeight: '32px' }],
        'web-h5': ['22px', { lineHeight: '28px' }],
        'web-h6': ['18px', { lineHeight: '27px' }],
        'mobile-p1': ['18px', { lineHeight: '36px' }],
        'mobile-p2': ['16px', { lineHeight: '28px' }],
        'mobile-p3': ['14px', { lineHeight: '20px' }],
        'web-p1': ['20px', { lineHeight: '36px' }],
        'web-p2': ['18px', { lineHeight: '30px' }],
        'web-p3': ['16px', { lineHeight: '26px' }],
        'web-p4': ['14px', { lineHeight: '22px' }],
      },
    },
  },
  plugins: [],
};
