import React, { Component } from 'react';
import {
  Container,
  Header,
  List
} from 'semantic-ui-react';

import './Contact.css';

class Contact extends Component {

  render() {
    return (
      <div className="contact-view">
        <Container text className="body-container">
          <div className="contact-image-mobile" />

          <div className="header-text">
            <Header as='h1' className="white">Contact Us</Header>
            <p className="contact-sub">Chris Aikins</p>
          </div>

          <div className="contact-container">
            <div className="contact-container-col contact-image" />

            <List className="contact-container-col">
              <List.Item icon='phone' content={<a href='tel:1-918-605-7069'>(918) 605-7069</a>} />
              <List.Item
                icon='mail'
                content={<a href='mailto:caikins74@gmail.com'>caikins74@gmail.com</a>}
              />
            </List>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
