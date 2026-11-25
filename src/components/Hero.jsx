import { skillTicker } from '../data/skills'

const marqueeSkills = [...skillTicker, ...skillTicker]

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__content">
        <h1 className="hero__name">
          <span className="hero__name-line">Favour Umoh —</span>
          <span className="hero__role">Frontend Developer</span>
        </h1>
        <p className="hero__line">
          I build beautiful, responsive websites that help your ideas stand out
          and your business grow.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            Start a project
            <svg
              className="btn__icon"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 12 12 4M6.5 4H12v5.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a className="btn btn--ghost" href="#work">
            View my work
            <svg
              className="btn__icon"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 3.5v9M4.5 9.5 8 13l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="hero__marquee"
        aria-label={`Skills: ${skillTicker.join(', ')}`}
      >
        <div className="hero__marquee-track">
          {marqueeSkills.map((skill, index) => (
            <span className="hero__marquee-item" key={`${skill}-${index}`}>
              <span className="hero__marquee-diamond" aria-hidden="true" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
