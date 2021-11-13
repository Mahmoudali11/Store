import React from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
 
 

const NavBar = (props) => {
 var x=  localStorage.getItem("login")
var l=useNavigate();
  return (   <nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Shop Now</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " >
        
        <i className="fas fa-bars" style={{color:'white'}}></i>
      </span>
      
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className="nav-link" style={({ isActive }) => {
              return {
                 color: isActive ? "blue" :""
              };
            }} to="/">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">AboutUs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shopingcart">ShopingItme</NavLink>
        </li>
         
        {
           !x? <li className="nav-item">
           <NavLink className="nav-link" to="/login">login</NavLink>
         </li>:<li className="nav-item">
        <button className="btn" onClick={()=>{
          localStorage.removeItem("login")
      l("/login")

        }}>LpgOUt</button>
         </li>
            
          

        }
      </ul>
      <span className="badge" > 
     {props.cartitem}
      </span>
    </div>
  </div>
</nav> );


}
 
export default NavBar;
 