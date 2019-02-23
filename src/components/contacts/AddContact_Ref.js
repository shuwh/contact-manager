import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
  }

  static defaultProps = {
    name: 'Jack William',
    email: 'jack@gmail.com',
    phone: '111-111-1111',
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      phone: this.phoneRef.current.value,
    }
    console.log(contact);
  }

  render() {
    const { name, email, phone } = this.props;
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
                defaultValue={name}
                ref={this.nameRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder='Enter Email...'
                id='email'
                defaultValue={email}
                ref={this.emailRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder='Enter Phone Number...'
                id='phone'
                defaultValue={phone}
                ref={this.phoneRef}
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
