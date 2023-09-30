import './Skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  const fronelement = [
    {id: 1, name: 'HTML', lvl: 'Advanced' },
    {id: 2, name: 'CSS', lvl: 'Intermediate' },
    {id: 4, name: 'REACT', lvl: 'Intermediate' },
    {id: 5, name: 'GIT', lvl: 'Intermediate' },
    {id: 3, name: 'Javascript', lvl: 'Intermediate' },
  ]
  const Backelement = [
    {id:1, name: 'Python', lvl: 'Intermediate'},
    {id:3, name: 'GIT', lvl: 'Intermediate' },
    {id:4, name: 'Node JS', lvl: 'Basic'},
    {id:2, name: 'MySQL', lvl: 'Basic'},
  ]

  return (
    <div className='skp'>
      <h1>Skills</h1>
      <p>My technical level</p>
      <div className='flexbf'>
        <div className='sle'><div id='qle'>
          <h2>Frontend developer</h2>
          <div className="skills-container">
            {fronelement.map(item => (
              <div key={item.id} className="skill-item">
                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                <strong> {item.name}</strong><p>{item.lvl}</p>
              </div>
            ))}
          </div>
        </div></div>
        <div className='sld'><div id='qld'>
          <h2>Backend developer</h2>
          <div className="skills-container">
            {Backelement.map(item => (
              <div key={item.id} className="skill-item">
                <BsFillPatchCheckFill></BsFillPatchCheckFill>
                <strong> {item.name}</strong><p>{item.lvl}</p>
              </div>
            ))}
          </div>
        </div></div>
      </div>
    </div>
  )
}

export default Skills