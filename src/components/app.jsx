import React from "react";
import "./navbar";
import NavBar from "./navbar";
import ShopingCart from "./shopingcart";
import Home from "./home";
import Cart from "./cart";
import { 
   
  Route,Routes} from "react-router-dom";

import Contact from "./contact";
import About from "./about";
import ProductDetails from "./productdetails";
import PageNotFound from "./pagenotfound";
import Menu from "./menu";
import Login from "./login";
 import Admin from "./admin"
import EditData from "./editdata";
class App extends React.Component {
  componentDidMount() {
    console.log("component created");
  }
  constructor(props) {
    super();
    console.log("init");
  }

  state = {
    product: [
      { id: 0, name: "referf", count: 3 },
      { id: 1, name: "ttt", count: 343 },
      { id: 2, name: "ewrew", count: 32 },
    ],
    cartitem:[]
  };
  incrementC = (p) => {
    console.log(p);

    const a = this.state.product;
    var x = this.state.product.indexOf(p);
    a[x].count++;
    this.setState({
      product: a,
    });
  };
  retsetP = () => {
    var ne = this.state.product.map((e) => {
      e.count = 0;
      return e;
    });

    this.setState({
      product: ne,
    });
  };
  deleteP = (v) => {
    console.log("delrt");
    console.log(v);

    var ne = this.state.product.filter((e) => {
      return e.id !== v.id;
    });

    this.setState({
      product: ne,
    });
  };
  deletePC = (v) => {
    console.log("delrt");
    console.log(v);

    var ne = this.state.cartitem.filter((e) => {
      return e.id !== v.id;
    });

    this.setState({
      cartitem: ne,
    });
  };

  addtocart=(e)=>{
    console.log("add tocart")



     

    var x=this.state.cartitem;

var res= this.state.cartitem.filter(r=>e===r)
if(res.length>0){
  alert("alread in your cart")
  this.deletePC(e)
  return 
}
console.log("will add")
    x.push(e)
  this.setState({

      cartitem:x
    })

  }

  render() {
 
     
    console.log("from parent node ");
    return (
   <>
       <NavBar
          cartitem={this.state.product.filter((e) => e.count > 0).length}
        />


       
              <Routes>
              <Route   path='/' element={<Menu   product={this.state.product} cartitem={this.state.cartitem} addto={this.addtocart}/>}/>
              <Route  path='/cart' 
               element={<Cart cartitem={this.state.cartitem}/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/admin" element={<Admin/>}/>
               <Route path="/edit/:id" element={<EditData/>}/>
               <Route path="/edit" element={<EditData/>}/>
              {/* <Route path='/contact' element={<Contact/>}> 
               <Route path='about' element={<About/>}/> 
               </Route> 
              <Route path='/product/:id'  element={<ProductDetails product={this.state.product}/>}/>  
             <Route path='/shopingcart'  
       element={<ShopingCart
          product={this.state.product}
          onReset={this.retsetP}
          incrementC={this.incrementC}
          onDelete={this.deleteP}
        
           
         

        />}
        />   */}
         
         <Route
      path="*"
      element={
       <PageNotFound/>
      }
    /> 
              </Routes>  
              </>
 

        
     
    );
  }
}

export default App;
