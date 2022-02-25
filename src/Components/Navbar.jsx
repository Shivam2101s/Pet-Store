import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () =>{
    return (
        <div id="navbar">
            <img id="logo" src="https://www.pngfind.com/pngs/b/512-5126766_person-walking-dog-png.png" alt="" />
            <div id="navbar_div1">
            <Link className="navbar_link" to={"/"}>Dashboard</Link>  </div>
            <div id="navbar_div2"> <Link className="navbar_link" to={"/"}>Adopt a pet</Link></div>
        </div>
    )
}