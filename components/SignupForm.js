import axios from 'axios'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

  this.handleChange = event => {
    this.setState({
      name: event.target.value,
      email: event.target.value,
      password: event.target.value
     });
  };

    this.setState({
      [name]: value
    });

    this.handleSubmit = event => {
      event.preventDefault();


      const user = {
        name: this.state.name,
        email: this.state.password,
        password: this.state.password
      };

      axios.post('http://localhost:3000/users', { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
      }


  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={this.state.password}
            onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignupForm
