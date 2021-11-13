import React from "react";
import { useNavigate } from "react-router-dom";

class Comp extends React.Component {
  state = {
    pass: "",
    user: "",
    error: { user: "", pass: "", case: "" },
  };
  handlech = (v) => {
    var t = v.currentTarget.value;
    var tr = { ...this.state };
    tr[v.currentTarget.name] = t;
    console.log(t);
    this.setState(tr);
  };

  validate = (e) => {
    var x = this.state.user;
    var y = this.state.pass;

    if (x === "" || y === "") {
      var er = this.state.error;
      er["user"] = x.length === 0 ? "email required" : "";

      er["pass"] = y.length === 0 ? "user name required" : "";
      er["case"] = "0";

      console.log(er);

      this.setState({
        error: er,
      });

      return false;
    } else {
      var t = this.state.error;
      t["case"] = "1";

      this.setState({
        error: t,
      });
    }

    localStorage.setItem("login", "true");

    setTimeout(() => {
      this.props.navigate("/", { replace: true });
    }, 3000);
  };

  submitH = (e) => {
    e.preventDefault();

    this.validate();
  };
  render() {
    return (
      <div className="container">
        <form method="GET" onSubmit={this.submitH}>
          <div className="mb-3">
            <label name="user" htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="email"
              onChange={this.handlech}
              value={this.state.user}
              name="user"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
            {this.state.error.user.length > 0 ? (
              <div className="alert alert-danger">{this.state.error.user}</div>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              name="pass"
              onChange={this.handlech}
              value={this.state.pass}
              type="password"
              className="form-control"
              id="password"
            />
            {this.state.error.pass.length > 0 ? (
              <div className="alert alert-danger">{this.state.error.pass}</div>
            ) : (
              ""
            )}
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <input type="submit" className="btn btn-primary"/>
            
          {this.state.error.case === "1" ? (
            <div className="alert alert-success">Sucess Operation</div>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

function Login() {
  const n = useNavigate();
  return <Comp navigate={n} />;
}

export default Login;
