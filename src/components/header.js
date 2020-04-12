import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="navbar">
      <h1 className="navbar__name">Christian O'Donoghue</h1>
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar__list-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar__list-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="header-intro">
      <h1 className="header-intro__name">
        I'm Christian, a <span>web developer.</span>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
