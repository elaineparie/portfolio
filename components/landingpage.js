import React, { Component, PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className='landing-grid'>
      <Cell col={12}>
      <img
      className="avatar-img"
      src="https://i.imgur.com/jSu8Bh2.png"
      alt="headshot"
      />

      <div className="banner-text">
      <h1>Full Stack Web Developer</h1>
      <hr/>

      <p>HTML/CSS | Ruby | Ruby on Rails | Javascript | React</p>

      <div className="social-links">
      {/* Linkedin*/}
      <a href="https://www.linkedin.com/in/elaineparieanderson/" rel="nooperner noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>

      {/* Github*/}
      <a href="https://github.com/elaineparie" rel="nooperner noreferrer" target="_blank">
        <i className="fa fa-github-square" aria-hidden="true" />
      </a>

      {/* Youtube*/}
      <a href="https://www.youtube.com/channel/UCEbkzKCE6WA9zGTFiMaDXBg?view_as=subscriber" rel="nooperner noreferrer" target="_blank">
        <i className="fa fa-youtube-square" aria-hidden="true" />
      </a>
      </div>

      </div>
      </Cell>
      </Grid>
      </div>
    )
  }
}

export default LandingPage;
