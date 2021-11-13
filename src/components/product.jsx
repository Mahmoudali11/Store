import React, { Component } from "react";
import {Link} from "react-router-dom";

var x=document.getElementById("ht").style;

class Product extends Component {
 

  componentWillUnmount(){
    console.log("we will destry this compnent")

}
componentDidUpdate(last,prev){
  console.log("updated")
  console.log( last)
}


  render() {
      console.log(" iam comp /product")
      var colo=this.props.product.count===0?"badge bg-warning":"badge bg-success"
    return (
          
      <div className="row">
          
        <div className="col-2"><Link   to={"/product/"+this.props.product.id}  >
        {this.props.product.name}
          </Link></div>
        <div className="col-3">
        <span className={colo}>{this.props.product.count}</span>
        </div>
        <div className="col">
          <button
            className="btn  "
            onClick={() => {
                 this.props.incrementP(this.props.product)

            //   if ( x.direction=== "ltr") {
            //     x.direction = "rtl";
            //   } else {
            //     x.direction= "ltr";
            //   }
            }}
          >
            {x==="rtl"?"اضافة":"add"}
          </button>

          <i className="fas fa-trash-alt" onClick={() => {
    console.log("fdd")

             this.props.onDelete(this.props.product)

          }}></i>
        </div>
      </div>
    );
  }
}

export default Product;
