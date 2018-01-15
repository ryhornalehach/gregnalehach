import React from 'react';

const ProjectTile = props => {
  let photo, video;
  if (props.project.photo) {
    photo = <img src={props.project.photo} width="100%"></img>;
  }
  if (props.project.video) {
    photo = null;
    video = <iframe src={props.project.video} width="640" height="360" className="centered"></iframe>;
  }

  return (
    <div>
      <div className='large-140'>
        <i className="fa fa-cog fa-lg fa-spin" aria-hidden="true"></i> {props.project.name}
      </div>
      <div className='large-120'>
        <div className='row'>
          <p><a href={props.project.url}>{props.project.url}</a></p>
        </div>
        <div className='row'>
          {photo}
          {video}
        </div>
        <div className='row'>
          {props.project.description}
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default ProjectTile
