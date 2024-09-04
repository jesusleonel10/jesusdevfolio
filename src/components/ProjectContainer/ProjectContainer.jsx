import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {project.screenshot && (
      <div className='project__screenshot'>
        <img src={project.screenshot} alt="" />
      </div>
      )
    }

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

ProjectContainer.propTypes = {
  project : PropTypes.object,
}

export default ProjectContainer
