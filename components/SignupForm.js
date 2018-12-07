import { Button } from 'reactstrap'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
      <h3>Sign up</h3>
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleInputChange} />
        </label>
        <br />
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

export default SignupForm
