/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lagix: {
          midnight: '#111827',
          charcoal: '#1F2937',
          surface: '#1E293B',
          indigo: '#4F46E5',
          'indigo-hover': '#4338CA',
          'indigo-light': '#EEF2FF',
          blue: '#2563EB',
          'blue-light': '#EFF6FF',
          green: '#16A34A',
          'green-light': '#F0FDF4',
          bg: '#F8FAFC',
          muted: '#6B7280',
          'muted-light': '#9CA3AF',
          border: '#E2E8F0',
          'border-dark': '#374151',
          warning: '#F59E0B',
          'warning-light': '#FEF3C7',
          danger: '#DC2626',
          'danger-light': '#FEF2F2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'Noto Sans Arabic', 'sans-serif'],
      },
      borderRadius: {
        'lagix-sm': '8px',
        'lagix': '12px',
        'lagix-lg': '16px',
        'lagix-xl': '20px',
      },
      boxShadow: {
        'lagix-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'lagix-card': '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
        'lagix-dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}

