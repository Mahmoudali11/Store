import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
class Comp extends React.Component {

    state={

  product:[]

    }
   deleteData=async(id)=>{
try{
    await axios.delete("http://localhost:4000/prod/"+id)
    this.getDataFromApi()
alert("successfill operation ")}
    catch(er){
        alert("errror")
    }

   }

    getDataFromApi=async()=>{
         var res=await axios.get("http://localhost:4000/prod");
         if(res.status===200){
this.setState({


    product:res.data
})

         }



    }
    componentDidMount(){
        this.getDataFromApi();
    }

    render() { 

 console.log("renderd")
       
        return <div className="container mt-5">
            <a href="/edit" className="btn btn-primary">Add</a>
             <table  className="table table-bordered">
                <thead> 
                    <tr>

                        <th>
                            id
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                         cout
                        </th>
                        <th>
                        Edit
                        </th>
                        <th>
                      Delete 
                        </th>
                    </tr>


                </thead>
            <tbody>

                {

           this.state.product.map(e=><tr key={e.id}>



               <td>{e.id}</td>
               <td>{e.name}</td>

               <td>{e.count}</td>
               <td>
               <i className="fas fa-edit" onClick={()=>{

this.props.navigate("/edit/"+e.id.toString())

}}></i>
               </td>
               <td>
               <i className="fas fa-trash-alt" onClick={()=>{
                   this.deleteData(e.id.toString())

}}></i>
               </td>

           </tr>)


                }
             </tbody>

              
            </table>




        </div>;
    }
}

function Dashboard() {
    const navigate=useNavigate();
    return (  <Comp navigate={navigate}/> );
}

export default Dashboard;
 
 