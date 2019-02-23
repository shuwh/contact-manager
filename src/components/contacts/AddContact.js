import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }


  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className='card mb-3'>
        <div className="card-header">
          <h3>Add Contact</h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
    )
  }
}

export default AddContact
