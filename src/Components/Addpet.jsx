import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addpet.css";

export const Addpet = () => {
  const [form, setForm] = useState(null);
  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      availability: "Available",
      [name]: value,
    });
  };

  useEffect(() => {}, []);

  const add_pet = (e) => {
    e.preventDefault();
    console.log(form);
    const payload = form;

    fetch("http://localhost:4000/pets", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      alert("Pet added to inventory !!")
      navigate("/success");
    });
  };
  return (
    <div id="addpet_div">
      <div className="main_head_div">Adopt a pet</div>
      <div className="form_div">
        <h2>Add pet for adoption</h2>
        <p>We Know you love your Pet more</p>
        <form onSubmit={add_pet} id="add_form">
          <label htmlFor="name">
            Name<span className="require">*</span>
          </label>
          <input
            onChange={handleChange}
            name="breed"
            type="text"
            placeholder="Breed of the pet"
            required
          />
          <label htmlFor="name">
            Given name<span className="require">*</span>
          </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Custom name of the pet"
            required
          />
          <label htmlFor="name">
            Price<span className="require">*</span>
          </label>
          <input
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="Price of the pet"
            required
          />
          <label htmlFor="name">
            Photo<span className="require">*</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="photo"
            placeholder="Image url"
            required
          />
          <select name="duration" onChange={handleChange} required>
            <option value="" hidden>
              Adoption period
            </option>
            <option value="lifetime">Own for lifetime</option>
            <option value="1 year">Adopt for 1 year</option>
          </select>
          <input type="submit" value="Save" className="save_btn" />
        </form>
      </div>
    </div>
  );
};
