import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  List,
} from 'semantic-ui-react';

import './FAQ.css';

class FAQ extends Component {

  render() {
    return (
      <div className="faq-view">
        <Container text className="body-container">
          <div className="header-text">
            <Header as='h1' className="white">Frequently Asked Questions</Header>
            <p className="faq-sub">Professional Carpentry</p>
          </div>

          <div className="faq-container">
            <p className="faq-question">Why hire a professional?</p>
            <p className="faq-answer">
            <List bulleted>
              <List.Item>High-quality work that provides a long-lasting result</List.Item>
              <List.Item>Your safety</List.Item>
              <List.Item>It saves you money in the long run as you can avoid costly repairs</List.Item>
            </List>
            </p>

            <p className="faq-question">What type of services do you provide?</p>
            <p className="faq-answer">
            <List bulleted>
              <List.Item>Interior trim</List.Item>
              <List.Item>Cabinets</List.Item>
              <List.Item>Mantels</List.Item>
              <List.Item>Stairs</List.Item>
              <List.Item>More</List.Item>
            </List>
            If you have any questions about a project or service, please&nbsp;&nbsp;
            <Link to="/contact" className="faq-link" onClick={e => this.props.handleItemClick(e, "contact")}>
              Contact Us
            </Link>
            &nbsp;&nbsp;for a free quote!
            </p>

          </div>
        </Container>
      </div>
    );
  }
}

export default FAQ;
