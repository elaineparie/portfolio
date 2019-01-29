import React, { Component, PropTypes } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";


class Resume extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <div styel={{textAlign: 'center'}}>
            <img
              src="https://i.imgur.com/jSu8Bh2.png"
              alt="headshot"
              style={{height: '200px'}}
            />
          </div>
          <h2 style={{paddingTop: '2em'}}>Elaine Anderson</h2>
          <h4 style={{color: 'grey'}}>Programmer</h4>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <p>Full-stack web developer with a passion for pursuing creative projects through critical thinking.  With experience in Ruby on Rails, JavaScript, and React and a background in Journalism, I discovered web development through a fierce desire to learn the unknown. I bring strong skills in team-building plus proactive independent work that help companies move efficiently and positively toward their goals.</p>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <h5>Location</h5>
          <p>Boston, MA</p>
          <h5>Phone</h5>
          <p>(603) 707-0905</p>
          <h5>Email</h5>
          <p>eparie@bu.edu</p>
          <h5>LinkedIn</h5>
          <p>https://www.linkedin.com/in/elaineparieanderson/</p>
          <h5>Blog</h5>
          <p>https://elaineparie.github.io/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>

          <Education
            startYear="May, 2018"
            endYear="Nov, 2018"
            schoolName="Flatiron School"
            schoolMajor="Full-Stack Web Development"
          />

          <Education
            startYear="Sept, 2013"
            endYear="May, 2017"
            schoolName="Boston University"
            schoolMajor="Journalism"
            schoolMinor="Philosophy"
            schoolGpa={3.74}
          />

          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Experience</h2>
          <Experience
          startYear="Dec, 2016"
          endYear="May, 2017"
          jobTitle="Travel Editor"
          jobName="Boston University BUZZ"
          taskOne="+ Organized and scheduled the work of 10 writers"
          taskTwo="+ Held bi-weekly pitch meetings to assist writers develop their ideas"
          taskThree="+ Edited an article per week "
          />
          <Experience
          startYear="May, 2016"
          endYear="Aug, 2017"
          jobTitle="Reporter"
          jobName="Foster's Daily Democrat"
          taskOne="+ Adopted a beat and wrote two articles per day about the area"
          taskTwo="+ Contacted and interviewed numerous officials and other citizens"
          taskThree="+ Retrieved court records and other documents to inform stories"
          />
          <Experience
          startYear="Sept, 2015"
          endYear="Dec, 2015"
          jobTitle="Editorial Intern"
          jobName="Wanderu.com"
          taskOne="+ Wrote bi-weekly articles for a travel review blog"
          taskTwo="+ Edited and posted work through Wordpress"
          taskThree="+ Promoted business through social media "
          />
          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Skills</h2>
          <Skills
            skill='Ruby'
            progress={95}
          />
          <Skills
            skill='HTML/CSS'
            progress={85}
          />
          <Skills
            skill='Javascript'
            progress={70}
          />
          <Skills
            skill='React'
            progress={60}
          />

        </Cell>
      </Grid>
    )
  }
}

export default Resume;
