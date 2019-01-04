import React, { Component, PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto' }}>
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
      </div>
      </Cell>
      </Grid>
      </div>
    )
  }
}

export default LandingPage;
