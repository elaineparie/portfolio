import React, { Component, PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Elaine Anderson</h2>
            <img
              src="https://i.imgur.com/jSu8Bh2.png"
              alt="headshot"
              style={{height: '250px'}}
            />
        </Cell>
        <Cell col={6}>half page</Cell>
      </Grid>
    </div>
    )
  }
}

export default Contact;
