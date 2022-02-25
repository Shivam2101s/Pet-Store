import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [avlCount, setavlCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    getData();
    getAvilable();
  }, [filter]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const addNewPet = () => {
    navigate("/add");
  };

  const getAvilable = () => {
     
    fetch(`http://localhost:4000/pets?availability=Available`)
      .then((d) => d.json())
      .then((res) => {
        console.log("Available Pets:", res.length);
        setavlCount(res.length);
      });
  };

  const getData = () => {
    if(filter === "Available" || filter === "Adopted") {
            fetch(`http://localhost:4000/pets?availability=${filter}`)
      .then((d) => d.json())
      .then((res) => {
        setData(res);
      });
    }else{
         fetch(`http://localhost:4000/pets`)
      .then((d) => d.json())
      .then((res) => {
        setData(res);
        setTotal(res.length);
        console.log("Total Pets:", res.length);
      });
    }
   
  };


  const removePet = (id) => {
    fetch(`http://localhost:4000/pets/${id}`, {
      method: "DELETE",
    })
      .then((d) => d.json())
      .then((res) => {
        getData();
        alert("Deleted Successfully!!");
      });
  };

  return (
    <div id="dashboard">
      <div className="main_head_div">
        <h1>Adopt a pet</h1>
        <button id="addNewBtn" onClick={addNewPet}>
          Add new pet
        </button>
      </div>
      <div id="upper_div">
        <div id="upper_div_left"></div>
        <div id="upper_div_right">
          <p>
            Each year, it's estimated that more than one million adoptable dogs
            and cats are euthanized in the India, simply because too many pets
            come into shelters.
          </p>
          <div className="countDiv">
            <div>
              <p>Total pets</p>
              <p className="petCount">{total}</p>
            </div>
            <div>
              <p>Total adopted</p>
              <p className="petCount">{total - avlCount}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="mid_div">
        <h2 id="sec_head">Pet details</h2>
        <select name="filter" onChange={handleFilter}>
          <option value="all" >
            Filter by Status
          </option>
          
          <option value="Available">Available</option>
          <option value="Adopted">Adopted</option>
        </select>
      </div>

      <div className="tableDiv">
        <table>
          <tr id="upper_tr">
            <th>S.No</th>
            <th>Given name</th>
            <th>Pet name</th>
            <th>Price (₹)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          {data.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.breed}</td>
              <td>₹ {e.price}</td>
              <td>{e.availability}</td>
              <td>
                <button className="actionBtn">
                  <Link to={`/edit/${e.id}`}>🖊️</Link>
                </button>
                <button
                  className="actionBtn"
                  onClick={() => {
                    removePet(e.id);
                  }}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
