import React from "react";
import "./Form.css";
import ReactDOM from "react-dom";
import background from "./images/background.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: ["demo2", "demo1"],
    };
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
        <select value={this.state.nom}>
          <option value="demo1">Démo 1</option>
          <option value="demo2">Démo 2</option>
          <option value="demo3">Démo 3</option>
        </select>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#App"));
