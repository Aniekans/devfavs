function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section__inner">
        <p className="section__label">Contact</p>
        <h2 className="section__title section__title--wide">Let&apos;s build something bold.</h2>
        <a className="contact__email" href="mailto:hello@favourumoh.com">
          hello@favourumoh.com
        </a>
        <ul className="contact__socials">
          <li>
            <a href="#" aria-label="GitHub (link coming soon)" onClick={(e) => e.preventDefault()}>
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="LinkedIn (link coming soon)"
              onClick={(e) => e.preventDefault()}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" aria-label="X (link coming soon)" onClick={(e) => e.preventDefault()}>
              X
            </a>
          </li>
        </ul>
        <p className="footer-note">© {new Date().getFullYear()} Favour Umoh</p>
      </div>
    </section>
  )
}

export default Contact
