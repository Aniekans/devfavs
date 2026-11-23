import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#top', id: 'top', label: 'Home' },
  { href: '#about', id: 'about', label: 'About Me' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#work', id: 'work', label: 'Project' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#contact', id: 'contact', label: 'Contact Me' },
]

const RESUME_HREF = '/Favour_Umoh-Uko_Frontend_Developer_CV.pdf'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')
  const clickLockUntil = useRef(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map((link) => link.id)
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < clickLockUntil.current) return

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setActive(id)
    clickLockUntil.current = Date.now() + 900
    setOpen(false)
  }

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a className="nav__brand" href="#top" onClick={() => handleNavClick('top')}>
        Favour - <span>BiggestFav</span>
      </a>

      <nav
        id="nav-links"
        className={`nav__pill${open ? ' nav__pill--open' : ''}`}
        aria-label="Primary"
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={active === link.id ? 'is-active' : undefined}
            aria-current={active === link.id ? 'true' : undefined}
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="nav__resume"
        href={RESUME_HREF}
        download="Favour_Umoh-Uko_Frontend_Developer_CV.pdf"
      >
        Download Résumé
      </a>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav__toggle-bars" aria-hidden="true" />
      </button>
    </header>
  )
}

export default Nav
