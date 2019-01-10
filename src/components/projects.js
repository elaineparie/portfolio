import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Video Demo</Button>
              <Button colored>Other</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #2</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Video Demo</Button>
              <Button colored>Other</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #3</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Video Demo</Button>
              <Button colored>Other</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div>
        <h1>This is rails</h1>
        </div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div>
        <h1>This is Sinatra</h1>
        </div>
      )
    }
    else if(this.state.activeTab === 3){
      return(
        <div>
        <h1>This is JS</h1>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
            <Tab>Rails</Tab>
            <Tab>Sinatra</Tab>
          <Tab>Javascript</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
