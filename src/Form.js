import React from "react";
import "./Form.css";
import ReactDOM from "react-dom";
import background from "./images/background.jpg";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      nom: Array.from(e.target.selectedOptions).map((o) => o.value),
    });
  }

  render() {
    return (
      <div className="form">
        <img className="sidepic" src={background} alt="homepage" />
        <div className="formbody">
          <select value={this.state.nom}>
            <option value="demo1">Mr</option>
            <option value="demo2">Mme</option>
            <option value="demo3">Mlle</option>
          </select>
          {JSON.stringify(this.state.nom)}
          <label htmlFor="Name">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={this.state.nom}
            onChange={this.handleChange}
            multiple
          />
          <label htmlFor="Name">Prenom :</label>
          <input type="text" id="prenom" name="prenom" />

          <div>
            <label htmlFor="Name">Objet :</label>
            <select value={this.state.nom}>
              <option value="demo1">Info</option>
              <option value="demo2">Devis</option>
              <option value="demo3">Autre</option>
            </select>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Text:
              <textarea
                value={this.state.value}
                onChange={this.handleChange}
              />{" "}
            </label>

            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
