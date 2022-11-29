import React, { Component } from "react";
import { Formik } from "formik";

class Login extends Component {
  handleSubmit(values) {
    console.log("submit success");
  }

  render() {
    let initialValues = {
      email: "",
      password: "",
    };

    return (
      <div className="">
        <Formik
          onSubmit={(values) => {
            this.handleSubmit(values);
          }}
          innerRef={(e) => (this.formikRef = e)}
          enableReinitialize
          initialValues={initialValues}
        >
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={Formik.handleChange}
            value={Formik.values.email}
          />

          <input
            id="password"
            name="password"
            type="String"
            onChange={Formik.handleChange}
            value={Formik.values.password}
          />

          <button type="submit">Submit</button>
        </Formik>
      </div>
    );
  }
}

export default Login;
