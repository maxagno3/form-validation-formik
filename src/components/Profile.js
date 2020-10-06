import React, { Component } from "react";
import Formik from "./Formik";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ username: "", bio: "", email: "", phoneNumber: "" }}
          error={{ username: "", bio: "", email: "", phoneNumber: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            } else if (!/^([^0-9]*)$/.test(values.username)) {
              errors.username = "Must not contain any numbers";
            }

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              // !values.email.endsWith(".com")
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.bio) {
              errors.bio = "Required";
            } else if (!/^([a-zA-Z0-9_-]){3,150}$/.test(values.bio)) {
              errors.bio = "Must be atleast 6 characters";
            }

            if (!values.phoneNumber) {
              errors.phoneNumber = "Required";
            } else if (values.phoneNumber.length !== 10) {
              errors.phoneNumber = "Must be of 10 digits";
            }
            return errors;
          }}
        >
          {(handleChange, handleSubmit, errors, values) => (
            <>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={values.username}
                  onChange={handleChange}
                />
                <small>{errors.username}</small>

                <input
                  type="text"
                  name="bio"
                  placeholder="Enter bio"
                  value={values.bio}
                  onChange={handleChange}
                />
                <small>{errors.bio}</small>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                />
                <small>{errors.email}</small>

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                <small>{errors.phoneNumber}</small>

                <button>Back</button>
                <button type="submit">Next</button>
              </form>
            </>
          )}
        </Formik>
      </div>
    );
  }
}
