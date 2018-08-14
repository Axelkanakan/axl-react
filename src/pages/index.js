import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="heroGroup">
        <h1>Learn to <br/> design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>

        <div className="logos">
          <img src={require('..//images/logo-sketch.png')} width="50" />
          <img src={require('..//images/logo-figma.png')} width="50" />
          <img src={require('..//images/logo-studio.png')} width="50" />
          <img src={require('..//images/logo-framer.png')} width="50" />
          <img src={require('..//images/logo-react.png')} width="50" />
          <img src={require('..//images/logo-swift.png')} width="50" />
        </div>
        <Wave/>

      </div>
    </div>
    <div className="Cards">
      <h2>12 courses, coming soon</h2>
      <div className="cardGroup">
        <Card 
          title="Design System"
          text="10 sections"
          img={require('../images/wallpaper.jpg')}
          date="21aug"
        />
        <Card 
          title="React for designers"
          text="12 sections"
          img={require('../images/wallpaper2.jpg')}
          date="13apr"
        />
        <Card 
          title="Sound Design"
          text="5 sections"
          img={require('../images/wallpaper3.jpg')}
          date="new"
        />
        <Card 
          title="ARkit 2"
          text="10 sections"
          img={require('../images/wallpaper4.jpg')}
          date="21jul"
        />
      </div>
    </div>
    <Section 
        image={require('..//images/wallpaper2.jpg')} 
        logo={require('..//images/logo-react.png')}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
  </div>
)

export default IndexPage


