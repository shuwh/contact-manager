import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-3">
        <div className="container">
          <a href="/" className="navbar-brand">{branding}</a>
          <button className="navbar-toggler" data-toggle='collapse' data-target='#navbarCollapse'>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home mr-1"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus mr-1"></i>
                  Add</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question mr-1"></i>
                  About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  branding: 'My App'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header
