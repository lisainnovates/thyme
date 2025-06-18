
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Coastal fishing village palette
				'mediterranean-blue': '#2C5F7C',
				'amalfi-blue': '#4A90A4',
				'olive-grove': '#6B7B3F',
				'sicilian-olive': '#4F5D2F',
				'lemon-sun': '#E6B800',
				'coastal-yellow': '#F2D974',
				'terracotta-warm': '#B8860B',
				'etna-terracotta': '#A0752B',
				'volcanic-stone': '#2C3E50',
				'mediterranean-cream': '#F5F5DC',
				'sea-mist': '#E0F2F1',
				'lemon-grove': '#F0F8E8'
			},
			fontFamily: {
				'dancing': ['Dancing Script', 'cursive'],
				'playfair': ['Playfair Display', 'serif'],
				'serif': ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gentle-sway': {
					'0%, 100%': { transform: 'translateX(-2px) rotate(-1deg)' },
					'50%': { transform: 'translateX(2px) rotate(1deg)' }
				},
				'mediterranean-breeze': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-3px) rotate(1deg)' },
					'66%': { transform: 'translateY(1px) rotate(-0.5deg)' }
				},
				'story-shimmer': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'cookbook-flip': {
					'0%': { transform: 'rotateY(0deg) scale(1)' },
					'25%': { transform: 'rotateY(45deg) scale(0.95)' },
					'50%': { transform: 'rotateY(90deg) scale(0.9)' },
					'75%': { transform: 'rotateY(135deg) scale(0.95)' },
					'100%': { transform: 'rotateY(180deg) scale(1)' }
				},
				'timer-fill': {
					'0%': { 'stroke-dashoffset': '0' },
					'100%': { 'stroke-dashoffset': '440' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-sway': 'gentle-sway 4s ease-in-out infinite',
				'mediterranean-breeze': 'mediterranean-breeze 6s ease-in-out infinite',
				'story-shimmer': 'story-shimmer 3s ease-in-out infinite',
				'cookbook-flip': 'cookbook-flip 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'timer-fill': 'timer-fill linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
