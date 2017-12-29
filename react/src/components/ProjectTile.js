import React from 'react';

const ProjectTile = props => {

  return (
    <div>
      <div className='large-140'>
        <i className="fa fa-cog fa-lg" aria-hidden="true"></i> {props.project.name}
      </div>
      <div className='large-120'>
        <p><a href={props.project.url}>{props.project.url}</a></p>
        {props.project.description}
      </div>
      <hr/>
    </div>
  )
}

export default ProjectTile
