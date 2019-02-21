import React from 'react'
import PropTypes from 'prop-types'

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
                <a href="/" className="nav-link">Home</a>
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
