import React from 'react';
import axios from 'axios';
import {Posts} from "../post"

 
class Menu extends React.Component {
    state={
        
        product: [
             
          ],
          cart:[],
 


    }


     getPostFromApi=async ()=>{
  
                    const r=await axios.get( "http://localhost:4000/prod");
                    var x=[];
                   if(r.status===200){
                     
 console.log(r.data)

              x=    r.data.map((e)=>

                   Posts.fromjson(e)
                  )
                   this.setState({
product:x

                   })
                  
               
                
                }
                 


    }
    componentDidMount(){
      this.getPostFromApi();

    }

 render () { 

        return <div className="container">
            <h1>posts</h1>

 
              <div className="row gap-3 justify-content-center">


                  {
                     this.state.product.map(e=><div className="col-sm-3 flex-fill bg-success">
               <h1>{e.name}</h1>
                <p>{e.count}</p>




                     </div>)


                  }
              </div>



            {/* <table style={{textAlign:'center'}}>
              <tr>  <td>name</td>  <td>count</td> <td>sction</td></tr>
            {

                this.props.product.map(e=>{
 


                    return <tr> <td>{e.name}</td>  <td> {e.count} </td>  <td><i className="fas fa-trash-alt" style={{color:this.props.cartitem.indexOf(e)>=0?'green':''}} onClick={()=>{
                        this.props.addto(e)
                    }} ></i></td> </tr>


                })
            }
            </table> */}




        </div>;
    }
}
 
export default Menu;
