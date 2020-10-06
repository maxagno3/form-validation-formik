import React, { Component } from "react";
import Formik from "./Formik";

export default class Form extends Component {
  render() {
    return (
      <Formik initialValue={{ username: "", bio: "" }}>
        {(handleChange, handleSubmit, errors) => (
          <>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter username"
              />
              {errors.email && <small>{errors.email}</small>} <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter password"
              />
              {errors.password && <small>{errors.password}</small>} <br />
              <button>Submit</button>
            </form>
          </>
        )}
      </Formik>
    );
  }
}
