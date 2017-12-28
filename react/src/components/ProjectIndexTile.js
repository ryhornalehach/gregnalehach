import React from 'react';

const ProjectIndexTile = props => {

  return (
    <div onClick={props.clickHandler} id={props.project.id} className='large-140'>
      {props.project.name}
    </div>
  )
}

export default ProjectIndexTile
