import {React} from 'react';
 import { useNavigate,useParams,useLocation}  from "react-router-dom"
 
 
 
 
 function ProductDetails(props) {

    let {id} =useParams();
     const navi=useNavigate()
     const ls=useLocation()
     console.log(ls.pathname)
     return<>
    
      <h1>{props.product[parseInt(id)].name}</h1>
      <button className="btn" onClick={()=>{
           navi("/shopingcart",{replace:true})
      }}>



           save
      </button>
    </>
    
 
 }
  
 export default ProductDetails