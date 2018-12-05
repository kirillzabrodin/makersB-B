class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

render() {
  return (
    <form>
    <label>
        Email:
        <input
          name="email"
          type="text"
          value={this.state.email} />
      </label>
      <br />
      <label>
        Password:
        <input
          name="password"
          type="text"
          value={this.state.password} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
  }
}

export default LoginForm
