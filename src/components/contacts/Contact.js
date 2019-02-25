import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import axios from "axios";

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (dispatch, id) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const titleStyle = this.state.showContactInfo
      ? ["fas", "ml-2", "fa-sort-up"]
      : ["fas", "ml-2", "fa-sort-down"];
    const contactInfo = this.state.showContactInfo ? (
      <ul className="list-group">
        <li className="list-group-item">Email: {email} </li>
        <li className="list-group-item">Phone: {phone} </li>
      </ul>
    ) : null;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 className="card-title">
                {name}
                <i
                  className={titleStyle.join(" ")}
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                />
                <i
                  className="fas fa-times text-danger"
                  style={{ cursor: "pointer", float: "right" }}
                  onClick={() => this.onDeleteClick(dispatch, id)}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      color: "black",
                      marginRight: "1rem",
                      float: "right",
                      cursor: "pointer"
                    }}
                  />
                </Link>
              </h4>
              {contactInfo}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
