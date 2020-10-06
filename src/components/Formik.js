import React, { Component } from "react";
import Form from "./Form";

export default class Formik extends Component {
  constructor() {
    super();
    this.state = {
      errors: { email: "", password: "" },
      steps: 1,
    };
  }

  componentDidMount() {
    let values = { ...this.props.initialValue };
    let error = { ...this.props.error };
    this.setState({ ...values });
    this.setState({ errors: { ...this.state.errors, ...error } });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  nextPage = () => {
    this.setState({ steps: this.state.steps + 1 });
  };

  renderPage = () => {
    switch (this.state.steps) {
      case 1:
        return <Form />;
      case 2:
        return;
      case 3:
        return;
      default:
        return <Form />;
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("evaluating");
    let err = this.props.validate(this.state);
    console.log(err.username, "bioooooooo");
    await this.setState({
      errors: {
        ...this.state.errors,
        email: err.email,
        bio: err.bio,
        phoneNumber: err.phoneNumber,
        username: err.username,
      },
    });
    // this.requiredErrors();
    // this.handleEmailError();
    // this.handlePasswordError();
    // this.validate();
  };

  // validate = () => {
  //   if (this.state.email && this.state.password) {
  //     this.nextPage();
  //     console.log("Validated!");
  //   } else {
  //     return;
  //   }
  // };

  render() {
    let { handleChange, handleSubmit } = this;
    let values = { ...this.state };
    console.log(this.state);
    return (
      <div>
        {this.props.children(
          handleChange,
          handleSubmit,
          this.state.errors,
          values
        )}
      </div>
    );
  }
}
