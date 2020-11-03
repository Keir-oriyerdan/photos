import React from "react";
import "./Form.css";
import background from "./images/background.jpg";

function Form() {
  return (
    
    <div className="form">
        <img className="sidepic" src={background} alt="homepage" /> 
        <div className="container">
          
          <form action="/action_page.php">
          <div className="row">
            <div className="col-25">
              <label for="fname">Prénom</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="Prénom" placeholder="Prénom..">
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Nom</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="Nom" placeholder="Nom..">
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="country">Country</label>
            </div>
            <div className="col-75">
              <select id="country" name="Pays">
                <option value="australia">France</option>
                <option value="canada">Suisse</option>
                <option value="usa">Belgique</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Sujet</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="Sujet" placeholder="..." style="height:200px"></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit">
          </div>
          </form>
        </div>

      </div>
    
     
  );
}

export default Form;
