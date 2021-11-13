import React from "react";
import Product from "./product";
class ShopingCart extends React.Component {
   
    
  render() {
    console.log("shopreset6");
    return (
      <React.Fragment>
        <button
          className="btn bg-Primary"
          onClick={() => {
            this.props.onReset();
          }}
        >
          Reset
        </button>

        {this.props.product.map((e) => {
          return (
            <Product
              key={e.id}
              product={e}
              onDelete={this.props.onDelete}
              incrementP={this.props.incrementC}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default ShopingCart;
