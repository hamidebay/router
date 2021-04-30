//import React, { useReducer, useState } from "react";

// import { render, screen } from "@testing-library/react";
export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    createPerson(event);
  };

  const createPerson = async (event) => {
    let response = await fetch("http://174.138.103.233/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: await JSON.stringify({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        gender: event.target.gender.value,
        birthday: event.target.birthday.value,
        email: event.target.email.value,
        password: event.target.password.value,
        about: event.target.about.value, 
      }),
    });

    let data = await response.json();

    return data;
  };

  return (
    <div>
      <h3 className="header">FORM</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input required name="firstName" type="text"></input>
          </label>
          <label>
            <p>Last Name </p>
            <input required name="lastName" type="text"></input>
          </label>
          <label>
            <p>Gender </p>
            <span>
              <input type="radio" name="gender" value="male"></input>Male
            </span>
            <span>
              <input type="radio" name="gender" value="female"></input>Female
            </span>
          </label>
          <label>
            <p>Birtday </p>
            <input type="date" name="birthday"></input>
          </label>
          <label>
            <p>E-Mail </p>
            <input type="email" name="email"></input>
          </label>
          <label>
            <p>Password</p>
            <input type="password" name="password"></input>
          </label>
          <label>
            <p>About Me </p>
            <input name="about"></input>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
