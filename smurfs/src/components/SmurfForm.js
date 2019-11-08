import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData, getData } from "../actions";

function SmurfForm() {
  const [newSmurf, setNewSmurf] = useState({});
  const dispatch = useDispatch();
  const isPosting = useSelector(state => state.isPosting);

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postData(newSmurf));
  };

  useEffect(() => dispatch(getData()), [isPosting]);

  return (
    <div className="smurf-form">
      <h2>Sumbit a new Smurf!</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />

      <input type="text" name="age" placeholder="age" onChange={handleChange} />

      <input
        type="text"
        name="height"
        placeholder="height"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SmurfForm;
