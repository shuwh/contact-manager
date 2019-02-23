import React, { Component } from 'react';
import { Consumer } from '../../context'
import uuid from 'uuid'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  }

  onSubmit = (event, dispatch) => {
    event.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    }
    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact,
    })

    // clear the form
    this.setState({
      name: '',
      email: '',
      phone: '',
    })
  }


  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card mb-3'>
              <div className="card-header">
                <h3>Add Contact</h3>
              </div>
              <div className="card-body">
                <form onSubmit={(event) => this.onSubmit(event, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Enter Name...'
                      id='name'
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder='Enter Email...'
                      id='email'
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Enter Phone Number...'
                      id='phone'
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
                  <input type="submit" value="Add Contact" className="btn btn-danger btn-block" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact
