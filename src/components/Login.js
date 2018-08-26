import React, {Component} from "react";

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      validated: false
    }
  }
  
  myUsernameInput = React.createRef();
  myPasswordInput = React.createRef()

  handleSubmit = (event) => {
    event.preventDefault()

    const { history } = this.props

    const userName = this.myUsernameInput.current.value
    const password = this.myPasswordInput.current.value

    if(userName === 'test' && password === 'test') {
      this.setState({
        validated: true
      })

      history.push(`/`)
    }
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
      <fieldset>
        <label htmlFor="userName">Username: </label>
        <input type="text" id="userName" defaultValue="test" ref={this.myUsernameInput} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" ref={this.myPasswordInput}  />
        <button type="submit">login</button>
      </fieldset>
    </form>
    )
  }
} 

export default Login;
