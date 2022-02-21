import React from "react";
import "./Form.css";
import { useState } from "react";
import gamesData from "./gamesData";

function Form() {
  const [formData, setFormData] = useState({
    imgUrl: "",
    title: "",
    time: "",
    age: "",
    players: "",
    own: false,
  });
  
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault()
    gamesData.push(formData)
}

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Add New Board Game</label>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Image URL"
            name="imgUrl"
            onChange={handleChange}
            value={formData.img}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Play Time"
          name="time"
          onChange={handleChange}
          value={formData.time}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Player Count"
          name="players"
          onChange={handleChange}
          value={formData.players}
        />
      </div>
      <input
        type="checkbox"
        id="own"
        name="own"
        onChange={handleChange}
        value={formData.own}
      />
      <label htmlFor="own">Do you OWN this game?</label>
      <br></br>
      <button className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
