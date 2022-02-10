import React from "react";
import "./RegisterCard.css";

export default function RegisterCard() {
  return (
    <div className="registerPage">
      <div className="registerTitle">Register</div>
      <div className="registerForm">
        <input
          className="registerType"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Type"
          aria-invalid="false"
        />
        <input
          className="registerFirstname"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Firstname"
          aria-invalid="false"
        />
        <input
          className="registerLastname"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Lastname"
          aria-invalid="false"
        />
        <input
          className="registerUsername"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Username"
          aria-invalid="false"
        />
        <input
          className="registerPassword"
          type="password"
          autocomplete="off"
          spellcheck="false"
          placeholder="Password"
          aria-invalid="false"
        />
        <input
          className="registerEmail"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Email Address"
          aria-invalid="false"
        />
        <input
          className="registerPhoneNumber"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Phone Number"
          aria-invalid="false"
        />
        <input
          className="registerDisplayNumber"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Display Number"
          aria-invalid="false"
        />
        <input
          className="registerBirthdate"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Birthdate"
          aria-invalid="false"
        />
        <input
          className="registerGender"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Gender"
          aria-invalid="false"
        />
        <input
          className="registerEducationLevel"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Education Level"
          aria-invalid="false"
        />
        <input
          className="registerPicture"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Picture"
          aria-invalid="false"
        />
        <input
          className="registerCitizenId"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Citizen ID"
          aria-invalid="false"
        />
        <input
          className="registerCitizenImage"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Citizen Image"
          aria-invalid="false"
        />
        <button className="registerSubmit">Register</button>
      </div>

      <div className="Login">
        <p className="LoginText">
          Already a user?
          <a className="LoginLink" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
