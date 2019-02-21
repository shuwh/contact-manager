import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {
  state = {

  };

  onShowClick = (e) => {

  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4 className='card-title' onClick={() => onShowClick()}>
          {name}
          <i className="fas fa-sort-down ml-2"></i>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email} </li>
          <li className="list-group-item">Phone: {phone} </li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact
