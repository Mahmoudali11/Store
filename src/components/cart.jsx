import React from 'react';
class Cart extends React.Component {
    render() { 
        return <div> hi from cart


<h1>rwerwe</h1>
            {

                this.props.cartitem.map(e=>{
 


                    return <div> <span>{e.name}</span>   {e.count}   <i className="fas fa-trash-alt" onClick={()=>{
                        this.props.addto(e)
                    }} ></i> </div>


                })
            }

        </div>;
    }
}
 
export default Cart;