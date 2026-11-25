export function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}

export function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="currentColor" />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fill="#0c0a0b"
        fontSize="9"
        fontWeight="800"
        fontFamily="Inter, Segoe UI, sans-serif"
      >
        TS
      </text>
    </svg>
  )
}

export function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.4 2.8h15.2l-1.38 15.5L12 21.2l-6.22-2.9L4.4 2.8Z"
        fill="currentColor"
      />
      <path
        d="M12 4.6v14.4l5.02-2.34.96-12.06H12Z"
        fill="currentColor"
        opacity="0.45"
      />
      <path
        d="M8.2 8.1h7.6l-.18 1.85H12.1v.05h3.38l-.28 2.9-3.1.86v.05l3.08-.84.22 2.18L12 16.7v.05l.02-.01 3.55-1 .4-4.12h-1.7"
        fill="#0c0a0b"
      />
    </svg>
  )
}

export function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.8 9.6c.9-3.2 2.7-4.8 5.2-4.8 2.6 0 4.1 1.3 5.2 3.8-1.1-1.6-2.2-2.2-3.4-1.8-.8.26-1.4.98-2 2.16-.8 1.62-1.8 3.44-4.2 3.44-1.1 0-2-.4-2.8-1.2.9 1.9 2.2 2.85 4 2.85 3.4 0 5.4-2.4 6.6-5.2 1.1 3.1-.2 6.5-3.5 7.7-2.6.94-5.4.1-6.8-2.15 1.3.86 2.5 1.1 3.6.7 1.1-.4 1.8-1.3 2.2-2.7-2.4 2.05-4.5 1.7-6.1-.2-1.3-1.5-1.5-3.5-.8-5.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

const icons = {
  react: ReactIcon,
  script: TypeScriptIcon,
  markup: HtmlIcon,
  tailwind: TailwindIcon,
}

export default function SkillIcon({ id }) {
  const Icon = icons[id]
  return Icon ? <Icon /> : null
}
