import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );
    const { name, email, phone } = res.data;
    this.setState({
      name,
      email,
      phone
    });
  }

  onSubmit = async (event, dispatch) => {
    event.preventDefault();
    const { name, email, phone } = this.state;

    // validate the form contents
    let newErrors = {};
    if (name === "") {
      newErrors = {
        ...newErrors,
        name: "Name is Required"
      };
    }

    if (email === "") {
      newErrors = {
        ...newErrors,
        email: "Email is Required"
      };
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      newErrors = {
        ...newErrors,
        email: "Please input a valid email address"
      };
    }

    if (phone === "") {
      newErrors = {
        ...newErrors,
        phone: "Phone is Required"
      };
    } else if (
      !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g.test(phone)
    ) {
      newErrors = {
        ...newErrors,
        phone: "Please input a valid phone number"
      };
    }

    if (Object.keys(newErrors).length > 0) {
      this.setState({ errors: newErrors });
      return;
    }

    // clear the form
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // go to main page to see the result
    this.props.history.push("/");
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                <h3>Edit Contact</h3>
              </div>
              <div className="card-body">
                <form onSubmit={event => this.onSubmit(event, dispatch)}>
                  <TextInputGroup
                    id="name"
                    label="Name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    id="email"
                    label="Email"
                    placeholder="Enter Email..."
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    id="phone"
                    label="Phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Edit Contact"
                    className="btn btn-danger btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
