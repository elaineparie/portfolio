import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
          <p style={{fontWeight: 'bold'}}>Travel Editor</p>
          <p>{this.props.taskOne}</p>
          <p>{this.props.taskTwo}</p>
          <p>{this.props.taskThree}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
