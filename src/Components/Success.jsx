import { useNavigate } from "react-router"
import "./Success.css" 

export const Success = () =>{
    let navigate= useNavigate();
  
  const handleClick = () => {
      navigate("/");
  }  
    return (
        <div id="success_div">
            <div className="main_head_div">Adopt a pet</div>

            <div className="success_sec_div">
                <img src="https://media.istockphoto.com/vectors/volunteer-helps-to-walk-dogs-cartoon-people-characters-isolated-vector-id883153388?k=20&m=883153388&s=170667a&w=0&h=DuwnyiYL1UMHrF_-EVUBesmmFrbHkhOeKrh8BLRLxEU=" alt="" />
                <h2>Inventory updated successfully</h2>
                <button id="goToDashBtn" onClick={handleClick}>Dashboard</button>
            </div>
        </div>
    )
}