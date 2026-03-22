/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a0f1e',
        cyan: {
          DEFAULT: '#00c8ff',
          dim: 'rgba(0,200,255,0.08)',
          border: 'rgba(0,200,255,0.2)',
          border2: 'rgba(0,200,255,0.3)',
        },
        glass: 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'dael-conic': 'conic-gradient(#00c8ff 0%, #0a0f1e 50%, #00c8ff 100%)',
      },
      animation: {
        spinRing: 'spinRing 4s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease both',
        pulse2: 'pulse2 3s ease-in-out infinite',
      },
      keyframes: {
        spinRing: {
          to: { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        card: '0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(0,200,255,0.07)',
        glow: '0 0 30px rgba(0,200,255,0.3)',
      },
    },
  },
  plugins: [],
}
