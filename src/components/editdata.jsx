import axios from "axios";
import React from "react";
import { useParams,useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Comp extends React.Component {
  state = {
    product: {
      name: "",
      count: "",
    },
  };
  showToast=()=>
    toast.info("added",{});
  

  fetchdata = async (id) => {
    try {
      const d = await axios.get("http://localhost:4000/prod/" + id);
      this.setState({
        product: d.data,
      });
    } catch (err) {
      console.log("###########errror" + err);
    }
  };

  updatObj = async (obj, id) => {
    try {
      await axios.patch(
        "http://localhost:4000/prod/" + id,

        {
          name: obj.name,
          count: obj.count,
        }
      );
      //this.props.navigate("/admin",{replace:true})

    } catch (error) {}
  };

  changeState = (v) => {
    var i = v.currentTarget.value;
    var tmp = this.state.product;

    tmp[v.currentTarget.name] = i;
    this.setState({
      product: tmp,
    });
  };
  addData = async (obj) => {

    try {
      var d = await axios.post(
        "http://localhost:4000/prod",

        {
          id: Math.floor(Math.random() * 100),
          name: obj.name,
          count: obj.count,
        }
     
      );
      console.log(d.status)
      if(d.status===200||d.status===201){
        this.showToast();
         // this.props.navigate("/admin",{replace:true})
            
    }
    } catch (error) {
        console.log("sorry try again")
    }
  };
  componentDidMount() {
      if(this.props.id)
    this.fetchdata(this.props.id);
  }

  render() {
    return (
      <div className="container">
          {
         this.props.id?<h1>Edit</h1>: <h2>Add</h2>

          }
        <form
          
          onSubmit={(e) => {
              e.preventDefault()

            if(this.props.id)
            this.updatObj(this.state.product, this.props.id);
            else{
             
                this.addData(this.state.product)
               

                console.log("last step")
            }
          }}
        >
          <input
            type="text"
            className="form-control p-3 "
            onChange={(e) => {
              this.changeState(e);
            }}
            name="name"
            placeholder="name"
            value={this.state.product.name || ""}
          />
          <input
            type="text"
            className="form-control p-3"
            name="count"
            placeholder="count"
            value={this.state.product.count || ""}
            onChange={(e) => {
              this.changeState(e);
            }}
          />
          <input type="submit" className="btn btn-primary"    value=  {
         this.props.id?"Edit":"Add"

          } />
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}

function EditData() {
  const { id } = useParams();
  const navigate=useNavigate();
  return <Comp id={id} navigate={navigate} />;
}

export default EditData;
