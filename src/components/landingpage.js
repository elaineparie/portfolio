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
      src="https://i.imgur.com/GSHHo9o.jpg"
      alt="headshot"
      />
      </Cell>
      </Grid>
      </div>
    )
  }
}

export default LandingPage;
