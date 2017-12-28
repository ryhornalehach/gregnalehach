import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile'
import ProjectIndexTile from '../components/ProjectIndexTile'

class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [],
      activeProjectId: null
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    // read the projects from the database
    fetch('/api/v1/projects',{
      credentials: "same-origin"
    })
    .then(response => response.json())
    .then(body => {
        this.setState({ projects: body.projects })
    })
  }

  clickHandler(event) {
    this.setState({ activeProjectId: event.target.id })
  }

  render() {
    let projectsList;

    projectsList = this.state.projects.map ((project, index) => {
      if (project.id == this.state.activeProjectId) {
        return(
          <ProjectTile
          key={index}
          project={project}
          />
        )
      } else {
        return(
          <ProjectIndexTile
          key={index}
          project={project}
          clickHandler={this.clickHandler}
          />
        )
      }
    })

    return (
      <div>
        {projectsList}
      </div>
    )
  }
}

export default Projects
