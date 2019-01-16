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
              src="https://i.imgur.com/GSHHo9o.jpg"
              alt="headshot"
              style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Cell>
        <Cell col={6}>half page</Cell>
      </Grid>
    </div>
    )
  }
}

export default Contact;
