import projects from '../data/projects'

function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="section__inner">
        <p className="section__label">Selected work</p>
        <h2 className="section__title section__title--wide">Projects in progress.</h2>

        <ul className="projects__list">
          {projects.map((project) => {
            const isPlaceholder = !project.href || project.href === '#'

            return (
              <li key={project.id}>
                <a
                  className="project"
                  href={project.href}
                  aria-disabled={isPlaceholder ? 'true' : undefined}
                  onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
                >
                  <span className="project__index">{project.id}</span>
                  <div className="project__body">
                    <h3 className="project__title">{project.title}</h3>
                    <p className="project__blurb">{project.blurb}</p>
                  </div>
                  <span className="project__meta">
                    {isPlaceholder ? 'Link soon' : 'View'}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
