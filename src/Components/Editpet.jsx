import { useEffect, useState } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import "./Editpet.css";

export const Editpet = () => {
  const [form, setForm] = useState(null);
  let navigate = useNavigate();

  let id= useParams();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const update_pet = (e) => {
    e.preventDefault();
    console.log(form);
    const payload = form;

    fetch(`http://localhost:4000/pets/${id.id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
       alert("Updated Successfully !!") 
       navigate("/success");
    });
  };
  return (
    <div id="editpet_div">
      <div className="main_head_div">Adopt a pet</div>
      <div className="form_div">
        <h2>Update the pet in inventory</h2>
        <p>We Know you love your Pet more</p>
        <form onSubmit={update_pet} id="edit_form">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="breed"
            type="text"
            placeholder="Breed of the pet"
            
          />
          <label htmlFor="name">Given name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Custom name of the pet"
            
          />
          <label htmlFor="name">Price</label>
          <input
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="Price of the pet"
            
          />
          <label htmlFor="name">Photo</label>
          <input
            onChange={handleChange}
            type="text"
            name="photo"
            placeholder="Image url"
            
          />
          <label htmlFor="availability">Status</label>
          <select name="availability" onChange={handleChange} >
            <option value="" hidden>
              Status
            </option>
            <option value="Available">Available</option>
            <option value="Adopted">Adopted</option>
          </select>
          <select name="duration" onChange={handleChange} >
            <option value="" hidden>
              Adoption period
            </option>
            <option value="lifetime">Own for lifetime</option>
            <option value="1 year">Adopt for 1 year</option>
          </select>

          <input type="submit" value="Update" className="update_btn" />
        </form>
      </div>
    </div>
  );
};
