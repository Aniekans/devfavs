function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__content">
        <h1 className="hero__name">
          <span>Favour</span>
          <span>Umoh</span>
        </h1>
        <p className="hero__line">
          Frontend developer crafting bold, considered interfaces.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
