import React from "react"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="section-projects" id="projects">
      <div className="section-header">
        <h1 className="section-header__title">Projects</h1>
        <h3 className="section-header__subtitle">Things I've built</h3>
      </div>

      <Project
        name="Note Party"
        stack="React, Sass, HTML, CSS, JavaScript"
        description="Interactive guitar tool I made to help visualize notes on the fretboard and aid in music composition. It allows you to toggle through specific keys and chords, displaying only the notes contained within them. Utilizes React Hooks and Context API."
        image={"note-party.png"}
        live="https://note-party.netlify.app/"
        source="https://github.com/cmodonoghue/note-party"
        flipped="yes"
        color="yellow"
      />

      <Project
        name="Greenit"
        stack="React, Sass, HTML, CSS, JavaScript"
        description="Simple app that uses Reddit's API to retrieve daily top posts from pages related to green things."
        image={"greenit.png"}
        live="https://greenit.netlify.com/"
        source="https://github.com/cmodonoghue/greenit"
        flipped="no"
        color="lavender"
      />

      {/* removed until it's fixed */}
      {/* <Project
        name="Verdict"
        stack="HTML, CSS, ASP.NET Core, SQL Server, Microsoft Azure"
        description="School project for Enterprise Application Development (MIS 421),
         built with a teammate. Full-stack web app that retrieves recent Tweets based on a search term,
          and uses Azure's Text Analytics API to calculate sentiment averages for each term."
        image={"verdict.png"}
        live="https://verdict20200406110113.azurewebsites.net/"
        source="https://github.com/cmodonoghue/verdict"
        flipped="yes"
        color="yellow"
      /> */}

      <Project
        name="Important Blog"
        stack="React, Gatsby, Sass, Netlify CMS, GraphQL"
        description="A fake blog site I built to practice mobile-first development,
        and to learn how to implement a content management system. Note: Don't expect any actual editorial content."
        image={"blog.png"}
        live="https://important-blog.netlify.com/"
        source="https://github.com/cmodonoghue/important-blog"
        flipped="yes"
        color="teal"
      />
    </div>

    <div className="section-skills" id="skills">
      <div className="section-header">
        <h1 className="section-header__title">Skills</h1>
        <h3 className="section-header__subtitle">Technologies I've used</h3>
      </div>

      <h3 className="skill-category">front end</h3>

      <div className="skills-list">
        <div className="skills-item">
          <img src={"/html.svg"} alt="html" className="skills-item__logo"></img>
          <h3 className="skills-item__name">HTML</h3>
        </div>
        <div className="skills-item">
          <img src={"/css.svg"} alt="html" className="skills-item__logo"></img>
          <h3 className="skills-item__name">CSS</h3>
        </div>
        <div className="skills-item">
          <img src={"/js.svg"} alt="html" className="skills-item__logo"></img>
          <h3 className="skills-item__name">JavaScript</h3>
        </div>
        <div className="skills-item">
          <img
            src={"/react.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">React</h3>
        </div>
        <div className="skills-item">
          <img
            src={"/angular.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">Angular</h3>
        </div>
        <div className="skills-item">
          <img src={"/sass.svg"} alt="html" className="skills-item__logo"></img>
          <h3 className="skills-item__name">Sass</h3>
        </div>
        <div className="skills-item">
          <img
            src={"/gatsby.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">Gatsby</h3>
        </div>
      </div>

      <h3 className="skill-category skill-category--back-end">back end</h3>

      <div className="skills-list">
        <div className="skills-item">
          <img
            src={"/csharp.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">C#</h3>
        </div>
        <div className="skills-item">
          <img src={"/asp.svg"} alt="html" className="skills-item__logo"></img>
          <h3 className="skills-item__name">ASP.NET Core</h3>
        </div>
        <div className="skills-item">
          <img
            src={"/mssql.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">MS SQL</h3>
        </div>
        <div className="skills-item">
          <img src={"/node.svg"} alt="html" className="skills-item__logo"></img>
          <h3 className="skills-item__name">Node.js</h3>
        </div>
      </div>

      <h3 className="skill-category skill-category--other">other</h3>

      <div className="skills-list">
        <div className="skills-item">
          <img src={"/git.svg"} alt="html" className="skills-item__logo"></img>
          <h3 className="skills-item__name">Git</h3>
        </div>
        <div className="skills-item">
          <img
            src={"/python.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">Python</h3>
        </div>
        <div className="skills-item">
          <img
            src={"/figma.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">Figma</h3>
        </div>
        <div className="skills-item">
          <img
            src={"/photoshop.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">Photoshop</h3>
        </div>
        <div className="skills-item">
          <img
            src={"/illustrator.svg"}
            alt="html"
            className="skills-item__logo"
          ></img>
          <h3 className="skills-item__name">Illustrator</h3>
        </div>
      </div>
    </div>

    <div className="section-contact" id="contact">
      <div className="section-header">
        <h1 className="section-header__title">Contact</h1>
        <h3 className="section-header__subtitle">Send me a message</h3>
      </div>
      <div className="contact-link">
        <img
          src={"/email.svg"}
          alt="email"
          className="contact-link__icon"
        ></img>
        <a href="mailto:odonoghuecm@gmail.com" className="contact-link__text">odonoghuecm@gmail.com</a>
      </div>
      <div className="contact-link">
        <img
          src={"/linkedin.svg"}
          alt="linkedin"
          className="contact-link__icon"
        ></img>
        <a href="http://linkedin.com/in/cmodonoghue/" className="contact-link__text" target="_blank">linkedin.com/in/cmodonoghue/</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
