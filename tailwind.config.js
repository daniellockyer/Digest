/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.hbs',
    './partials/**/*.hbs',
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#059669',
              '&:hover': {
                color: '#047857',
              },
            },
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            h4: {
              color: '#111827',
            },
            blockquote: {
              borderLeftColor: '#d1d5db',
              color: '#6b7280',
            },
            code: {
              backgroundColor: '#f3f4f6',
              color: '#111827',
              fontWeight: '400',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#f9fafb',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 