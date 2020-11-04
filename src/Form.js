import React from "react";
import "./Form.css";
import background from "./images/background.jpg";

function Form() {
  return (
    <div className="form">
      <img className="sidepic" src={background} alt="homepage" />
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Form;
