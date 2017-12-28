import React from 'react';

const ProjectTile = props => {

  return (
    <div>
      <div className='large-140'>
        {props.project.name}
      </div>
      <div className='large-120'>
        <p><a href={props.project.url}>{props.project.url}</a></p>
        {props.project.description}
      </div>
    </div>
  )
}

export default ProjectTile
