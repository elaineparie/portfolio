import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
      <Cell col={4}>
        <p>{this.props.startYear} - {this.props.endYear}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
        <p>Major: {this.props.schoolMajor}, Minor: {this.props.schoolMinor}, GPA: {this.props.schoolGpa}</p>
      </Cell>
      </Grid>
    )
  }
}

export default Education;
