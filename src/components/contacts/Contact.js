import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios'

import { Consumer } from '../../context';


class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  onDeleteClick = (dispatch, id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => dispatch({
        type: 'DELETE_CONTACT',
        payload: id,
      }))
  }



  render() {
    const { id, name, email, phone } = this.props.contact;
    const titleStyle = this.state.showContactInfo ?
      ['fas', 'ml-2', 'fa-sort-up'] :
      ['fas', 'ml-2', 'fa-sort-down'];
    const contactInfo = this.state.showContactInfo ?
      (<ul className="list-group">
        <li className="list-group-item">Email: {email} </li>
        <li className="list-group-item">Phone: {phone} </li>
      </ul>) :
      null;

    return (
      <Consumer >
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h4 className='card-title d-flex flex-row' >
                {name}
                <i className={titleStyle.join(" ")} style={{ cursor: 'pointer' }} onClick={this.onShowClick}></i>
                <i className="fas fa-times text-danger ml-auto" style={{ cursor: 'pointer' }} onClick={() => this.onDeleteClick(dispatch, id)}></i>
              </h4>
              {contactInfo}
            </div>
          );
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact
