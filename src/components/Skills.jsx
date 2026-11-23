const skills = [
  'React',
  'JavaScript',
  'CSS',
  'HTML',
  'Vite',
  'Responsive design',
  'UI systems',
  'Accessibility',
]

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <p className="section__label">Skills</p>
        <h2 className="section__title">Tools I reach for.</h2>
        <ul className="skills__list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
