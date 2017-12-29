import React from 'react';

const ProjectIndexTile = props => {

  return (
    <div onClick={props.clickHandler} id={props.project.id} className='large-140'>
      <i className="fa fa-cog fa-lg fa-spin" aria-hidden="true"></i> {props.project.name}
    </div>
  )
}

export default ProjectIndexTile
