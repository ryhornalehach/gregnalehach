import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Projects from './Projects'
import Contacts from '../components/Contacts'
import AboutMe from '../components/AboutMe'

class MainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
    this.handleActiveBlock = this.handleActiveBlock.bind(this);
  }

  handleActiveBlock(event) {
    let value = event.target.innerText
    this.setState({ selected: value });
  }

  render() {
    let textBlock, headerBlock;
    if (this.state.selected == null || this.state.selected == 'About me') {
      textBlock = <AboutMe />;
      headerBlock = 'Greg Nalehach, Web-developer';
    } else if (this.state.selected == 'Projects') {
      textBlock = <Projects />;
      headerBlock = 'My Projects';
    } else if (this.state.selected == 'Contacts') {
      textBlock = <Contacts />;
      headerBlock = 'Contacts';
    }

    return (
      <div className='row'>
        <div className='blackfield-main white-text'>
          <h2>{headerBlock}</h2>
          <div className='row'>
            <div className='col s4' onClick={this.handleActiveBlock}>About me</div>
            <div className='col s4' onClick={this.handleActiveBlock}>Projects</div>
            <div className='col s4' onClick={this.handleActiveBlock}>Contacts</div>
          </div>
          {textBlock}
        </div>
      </div>
    )
  }
}

export default MainPage
