import React from 'react';

const ProjectTile = props => {
  let photo;
  if (props.project.photo) {
    photo = <img src={props.project.photo} width="100%"></img>
  }

  return (
    <div>
      <div className='large-140'>
        <i className="fa fa-cog fa-lg fa-spin" aria-hidden="true"></i> {props.project.name}
      </div>
      <div className='large-120'>
        <p><a href={props.project.url}>{props.project.url}</a></p>
        {photo}
        {props.project.description}
      </div>
      <hr/>
    </div>
  )
}

export default ProjectTile
