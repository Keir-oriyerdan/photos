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
          <label htmlFor="Name">Last name :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={this.state.nom}
            onChange={this.handleChange}
            multiple
          />
          <label htmlFor="Name">First name :</label>
          <input type="text" id="prenom" name="prenom" />
          <div>
            <div className="objetradio">
              <label htmlFor="Name">Object :</label>
              <select value={this.state.nom}>
                <option value="demo1">Infos</option>
                <option value="demo2">Cost estimate</option>
                <option value="demo3">Other</option>
              </select>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option1" checked={true} />
                Past
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option2" />
                Present
              </label>
            </div>
            <div className="radio">
              <label>Future</label>
            </div>
            <form method="post" action="traitement.php">
              <p>
                <label for="pays" className="pays">
                  Where you come from ? ?
                </label>
                <br />
                <select name="pays" id="pays">
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
            </form>
          </div>

          <form onSubmit={this.handleSubmit}>
            <label>
              {" "}
              <p className="pays">What is your request ?</p>
              <textarea
                value={this.state.value}
                onChange={this.handleChange}
              />{" "}
            </label>
            <br></br>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
