/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0a0f',
          fg: '#e0e0e0',
          card: '#12121a',
          muted: '#1c1c2e',
          mutedFg: '#6b7280',
          accent: '#00ff88',
          accentSecondary: '#ff00ff',
          accentTertiary: '#00d4ff',
          border: '#2a2a3a',
          input: '#12121a',
          ring: '#00ff88',
          destructive: '#ff3366'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        tech: ['Share Tech Mono', 'monospace']
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        glitch: 'glitch 0.3s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        rgbShift: 'rgbShift 2s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end)',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        rgbShift: {
          '0%, 100%': { textShadow: '-2px 0 #ff00ff, 2px 0 #00d4ff' },
          '50%': { textShadow: '2px 0 #ff00ff, -2px 0 #00d4ff' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff8840' },
          '50%': { boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff8860, 0 0 40px #00ff8830' }
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        neon: '0 0 5px #00ff88, 0 0 10px #00ff8840',
        'neon-sm': '0 0 3px #00ff88, 0 0 6px #00ff8830',
        'neon-lg': '0 0 10px #00ff88, 0 0 20px #00ff8860, 0 0 40px #00ff8830',
        'neon-secondary': '0 0 5px #ff00ff, 0 0 20px #ff00ff60',
        'neon-tertiary': '0 0 5px #00d4ff, 0 0 20px #00d4ff60'
      }
    }
  },
  plugins: []
}