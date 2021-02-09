import React, { useState } from "react";
import "./Form.css";

import background from "./images/background.jpg";

const Form = () => {
  const [formData, setFormData] = useState({
    gender: "",
    lastName: "",
    firstName: "",
    object: "",
    mail: "",
    country: "",
    message: "",
    newsletter: false,
  });

  console.log(formData);

  const handleChange = (event) => {
    console.log(event.target.name);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form">
      <img className="sidepic" src={background} alt="homepage" />
      <div className="formbody">
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="mr">Mr</option>
          <option value="mme">Mme</option>
          <option value="melle">Mlle</option>
        </select>
        <label htmlFor="Name">Last name :</label>
        <input
          type="text"
          id="nom"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="Name">First name :</label>
        <input
          type="text"
          id="prenom"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <div>
          <div className="objetradio">
            <label htmlFor="Name">Object :</label>
            <select
              name="object"
              value={formData.object}
              onChange={handleChange}
            >
              <option value="infos">Infos</option>
              <option value="cost estimate">Cost estimate</option>
              <option value="other">Other</option>
            </select>
          </div>

          <p>
            <label for="pays" className="pays">
              Where you come from ? ?
            </label>
            <br />
            <select
              name="country"
              id="pays"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="france">France</option>
              <option value="espagne">Spain</option>
              <option value="italie">Italy</option>
              <option value="royaume-uni">UK</option>
              <option value="canada">Canada</option>
              <option value="etats-unis">USA</option>
              <option value="chine">China</option>
              <option value="japon">Japan</option>
            </select>
          </p>
        </div>

        <label>
          <p className="pays">What is your request ?</p>
          <textarea />
        </label>
        <br />
        <label htmlFor="mail">E-mail :</label>
        <input
          type="text"
          id="mail"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="newletter">S'abonner à la newletter :</label>
        <input
          type="checkbox"
          id="newletter"
          name="newsletter"
          value={formData.newsletter}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Envoyer" />
      </div>
    </div>
  );
};

export default Form;
