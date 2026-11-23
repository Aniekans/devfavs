const roles = [
  {
    period: '2024 — Present',
    title: 'Frontend Developer',
    place: 'Role placeholder',
    detail: 'Building polished interfaces and reusable UI systems. Replace with your real experience.',
  },
  {
    period: '2022 — 2024',
    title: 'Junior Frontend Developer',
    place: 'Role placeholder',
    detail: 'Shipped responsive pages, refined CSS layouts, and collaborated on product polish.',
  },
]

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <p className="section__label">Experience</p>
        <h2 className="section__title section__title--wide">Where I&apos;ve grown.</h2>

        <ul className="experience__list">
          {roles.map((role) => (
            <li key={role.period} className="experience__item">
              <p className="experience__period">{role.period}</p>
              <div>
                <h3 className="experience__title">{role.title}</h3>
                <p className="experience__place">{role.place}</p>
                <p className="experience__detail">{role.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
