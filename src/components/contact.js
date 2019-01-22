import React, { Component, PropTypes } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

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
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            You might not think a feather-step has any relation to a recursive method, but in reality, they are not so different. Each begins with a creative idea that is messy and lacking clarity, and in time, is refined. As a Ballroom Dancer and Developer with a background in Ruby and JavaScript, I am excited to bring my creative and technical skills to bear in a developer position.</p>
        </Cell>
        <Cell col={6}>
        <h2>Contact Me</h2>
        <hr/>
        <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
              <i className="fa fa-phone-square" aria-hidden="true"/>
              (603) 707-0905
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
              <i className="fa fa-envelope" aria-hidden="true"/>
              eparie@bu.edu
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
              <i className="fa fa-instagram" aria-hidden="true"/>
              @elaineparie
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
              <i className="fa fa-linkedin" aria-hidden="true"/>
              in/elaineparieanderson/
              </ListItemContent>
            </ListItem>

          </List>
        </div>



        </Cell>
      </Grid>
    </div>
    )
  }
}

export default Contact;
