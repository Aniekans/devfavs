function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner about__grid">
        <div>
          <p className="section__label">About</p>
          <h2 className="section__title">Built with care, shown with confidence.</h2>
        </div>

        <div className="about__content">
          <div className="about__portrait" aria-hidden="true">
            Portrait coming soon
          </div>
          <div className="about__copy">
            <p>
              I&apos;m Favour Umoh, a frontend developer who shapes interfaces that feel
              editorial, intentional, and alive. I care about typography, atmosphere, and
              the small details that make a product memorable.
            </p>
            <p>
              From layout systems to motion that earns its place, I focus on experiences
              that look bold and still feel effortless to use.
            </p>
          </div>
          <div className="about__focus">
            <strong>Currently focused on</strong>
            React interfaces, refined CSS systems, and portfolio-grade product polish.
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
