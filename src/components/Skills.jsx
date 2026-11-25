import SkillIcon from './SkillIcons'
import { skillArsenal } from '../data/skills'

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <h2 className="arsenal__title">Technical Arsenal</h2>
        <span className="arsenal__rule" aria-hidden="true" />
        <ul className="arsenal__grid">
          {skillArsenal.map((skill) => (
            <li key={skill.id} className={`arsenal-card arsenal-card--${skill.id}`}>
              <span className="arsenal-card__watermark" aria-hidden="true">
                <SkillIcon id={skill.id} />
              </span>
              <div className="arsenal-card__head">
                <span className="arsenal-card__icon">
                  <SkillIcon id={skill.id} />
                </span>
                <h3 className="arsenal-card__name">{skill.title}</h3>
              </div>
              <div className="arsenal-card__meta">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="arsenal-card__track">
                <div
                  className="arsenal-card__fill"
                  style={{ '--level': `${skill.proficiency}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
