import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

import './About.css';

class About extends Component {

  render() {
    return (
      <div className="about-view">
        <Container text className="body-container">
          <div className="header-text">
            <Header as='h1' className="white">About Us</Header>
            <p className="about-sub">Professional Carpenters</p>
          </div>

          <div className="about-container">
            <div className="about-container-col about-image" />

            <div className="about-container-col">
              <p className="about-detail">
                My name is Chris Aikins and I have provided quality cabinets, mantels, stairs, trim and more to the state of Oklahoma for over 25 years.
                <br/><br/>
                With personal, professional service from our experts you'll find exactly what you need.
                <br/><br/>
                If you can draw it, we can saw it!
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
