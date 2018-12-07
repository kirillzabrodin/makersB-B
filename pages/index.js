import Link from "next/link";
import { unsetToken } from "../lib/auth";
import Cookie from "js-cookie";
import SpaceList from "../components/SpaceList";
import React from "react";
import defaultPage from "../components/hocs/defaultPage";
import SignupForm from "../components/SignupForm";
import {
  Alert,
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);
    //query state will be passed to SpaceList for the filter query
    this.state = {
      query: ""
    };
  }

  onChange(e) {
    //set the state = to the input typed in the search Input Component
    //this.state.query gets passed into SpaceList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }

  render() {
    return (
      <div>

        <h1 align="center">Welcome to MakersBnB</h1>
        <SignupForm />

    </div>
    )
  }
}

export default defaultPage(Index);
