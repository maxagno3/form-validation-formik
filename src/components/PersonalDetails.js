import React, { Component } from "react";
import Formik from "./Formik";

export default class PersonalDetails extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValue={{
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            zipcode: "",
          }}
          error={{
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            zipcode: "",
          }}
          // requiredErrors={(initialValue) => {
          //   let errors = {};
          //   if (!initialValue.firstName) {
          //     errors.email = "Required";
          //   }
          // }}
        >
          {(handleChange, handleSubmit, errors, values) => (
            <>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  placeholder="Enter first name"
                  onChange={handleChange}
                />
                <small>{errors.firstName}</small>

                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  placeholder="Enter last name"
                  onChange={handleChange}
                />
                <small>{errors.lastName}</small>

                <textarea
                  type="text"
                  name="address"
                  value={values.address}
                  placeholder="Address where you live"
                  style={{ resize: "none" }}
                  onChange={handleChange}
                />
                <small>{errors.address}</small>

                <input
                  type="text"
                  name="city"
                  value={values.city}
                  placeholder="Name of the city where you live"
                  onChange={handleChange}
                />
                <small>{errors.city}</small>

                <input
                  type="number"
                  name="zipcode"
                  placeholder="Zip code of the area where you live"
                  onChange={handleChange}
                />
                <small>{errors.zipcode}</small>
                <button type="submit">Next</button>
              </form>
            </>
          )}
        </Formik>
      </div>
    );
  }
}
