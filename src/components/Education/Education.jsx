import { education } from '../../portfolio'
import './Education.css'

const Education = () => {

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Educación</h2>
    {education && (
      <div className='education__card'>
        <div className="logo">
            <img src={education.logo} alt="" />
        </div>
        <h3>{education.name}</h3>
        <span className='education__date'> {education.date} </span>
        <h4> {education.title} </h4>
        <p> {education.text} </p>
      </div>
    )

    }
    </section>
  )
}

export default Education
