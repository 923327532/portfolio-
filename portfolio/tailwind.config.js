/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'slate-900': '#0F172A',
        'slate-800': '#1E293B',
        'slate-700': '#334155',
        'slate-600': '#475569',
        'slate-500': '#64748B',
        'slate-400': '#94A3B8',
        'slate-300': '#CBD5E1',
        'slate-200': '#E2E8F0',
        'slate-100': '#F1F5F9',
        'blue-400': '#60A5FA',
        'blue-500': '#3B82F6',
        'orange-400': '#FB923C',
        'orange-500': '#F97316',
        'purple-400': '#A78BFA',
        'purple-500': '#8B5CF6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'aurora': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(96, 165, 250, 0.6)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-15px) translateX(15px)' },
          '50%': { transform: 'translateY(0) translateX(0)' },
          '75%': { transform: 'translateY(15px) translateX(-15px)' }
        },
        pulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

