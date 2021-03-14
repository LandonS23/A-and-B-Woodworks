import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Gallery.css';

class Gallery extends Component {
  state = { width: 0 }

  updateDimensions = () => this.setState({width: window.innerWidth});

  componentDidMount () {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    const { width } = this.state;

    return (
      <div className="gallery-view">
        <Container text className="body-container">
          <div className="header-text">
            <Header as='h1' className="white">Gallery</Header>
            <p className="gallery-sub">Before & After</p>
          </div>

        <Carousel className="gallery-carousel" autoPlay centerMode={width > 700} centerSlidePercentage={50} emulateTouch showThumbs={false}>
              <div>
                  <img src={require('../../resources/wood-background.jpg')} alt='before1' />
                  <p className="legend">Before</p>
              </div>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default Gallery;
