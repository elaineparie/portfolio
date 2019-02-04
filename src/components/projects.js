import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import { Link } from 'react-router-dom';

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
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>Your Story</CardTitle>
            <CardText>A personal blogging site using React and Redux
            </CardText>
            <CardActions border>
            <Button target="_blank" href="https://github.com/elaineparie/your-story" colored>Github</Button>
            <Button target="_blank" href="https://www.youtube.com/watch?v=FMGDjrECrGw" colored>Video Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>Portfolio</CardTitle>
            <CardText>My personal portfolio website
            </CardText>
            <CardActions border>
              <Button target="_blank" href="https://github.com/elaineparie/portfolio" colored>Github</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2015/01/Blog_About-Ruby2.jpg) center / cover'}}>Workout Planner</CardTitle>
            <CardText>A workout organizer using Ruby on Rails and Javascript to create personal workouts and exercises.
            </CardText>
            <CardActions border>
              <Button target="_blank" href="https://github.com/elaineparie/Workout_planner_ajax"colored>Github</Button>
              <Button target="_blank" href="https://www.youtube.com/watch?v=fpIYWyno3CU" colored>Video Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2015/01/Blog_About-Ruby2.jpg) center / cover'}}>Life Organizer</CardTitle>
            <CardText>A to-do app using Sinatra to group and order life tasks.
            </CardText>
            <CardActions border>
            <Button target="_blank" href="https://github.com/elaineparie/life_organizer"colored>Github</Button>
            <Button target="_blank" href="https://www.youtube.com/watch?v=FJ95SUU7guM&t=24s" colored>Video Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2015/01/Blog_About-Ruby2.jpg) center / cover'}}>Ballroom Events CLI Gem</CardTitle>
            <CardText>A CLI app that scrapes ndca.org for ballroom dance events.
            </CardText>
            <CardActions border>
            <Button target="_blank" href="https://github.com/elaineparie/ballroom_events_cli_app"colored>Github</Button>
            <Button target="_blank" href="https://www.youtube.com/watch?v=ZdfPBT1-pQ8" colored>Video Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGGQ4H_nyysRL1mqwd3MKi249y8IOhwMfy_7GsSdKrIR0q_CN8g) center / cover'}}>Workout Planner</CardTitle>
            <CardText>A workout organizer using Ruby on Rails and Javascript to create personal workouts and exercises.
            </CardText>
            <CardActions border>
              <Button target="_blank" href="https://github.com/elaineparie/Workout_planner_ajax"colored>Github</Button>
              <Button target="_blank" href="https://www.youtube.com/watch?v=fpIYWyno3CU" colored>Video Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
            <Tab>Ruby</Tab>
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
