import { Button } from 'reactstrap'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

    handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    render() {
      return (
        <div>
        <h3>Log in</h3>
        <form>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              type="text"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <Button color='primary'>Submit</Button>
        </form>
        </div>
      );
    }
  }

export default LoginForm
