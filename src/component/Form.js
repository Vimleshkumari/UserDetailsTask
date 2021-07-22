import React, { Component } from "react";
// import {InputText} from 'primereact/inputtext'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        password: ''
      },
      formValid: {
        name: false,
        email: false,
        password: false
      },
      formError: {
        name: '',
        email: '',
        password: '',
        button: false
      },
      successMessage: '',
      
    }
  }

  handleInputChange = (e) => {
    const formobj = this.state.form
    const name = e.target.name;
    const value = e.target.value;
    formobj[name] = value;
    this.setState({ form: formobj })
    this.validateField(name, value);
  }
  //validating fields
  validateField = (fieldName, value) => {
    const { formValid, formError } = this.state;
    switch (fieldName) {
      case 'name':
        if (value === "") {
          formError.name = "field required";
          formValid.name = false;
        } else if (!value.match(/^[A-Za-z ]{4,}$/)) {
          formError.name = "Name should have atleast 4 characters";
          formValid.name = false;
        } else {
          formError.name = "";
          formValid.name = true;
        }
        break;
      case 'email':
        if (value === "") {
          formError.email = "field required";
          formValid.email = false;
        } else if (!value.match(/^[A-Za-z0-9]{4,}@[A-z]{1,}.com$/)) {
          formError.email = "Email Id should have atleast 4 characters and should end with @example.com";
          formValid.email = false;
        } else {
          formError.email = "";
          formValid.email = true;
        }
        break;
      case 'password':
        if (value === "") {
          formError.password = "field required";
          formValid.password = false;
        } else if (!value.match(/^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!@#%&*^])\S{8,20}$/)) {
          formError.password = "Password must contain atleast 1 lowercase,1 uppercase,1 numeric,one special character and minimum 8 character length";
          formValid.password = false;
        } else {
          formError.password = "";
          formValid.password = true;
        }
        break;
      default:
        break
    }
  }

  submitRegister = (e) => {
    e.preventDefault();
    const obj = { name: this.state.form.name, email: this.state.form.email, password: this.state.form.password };
    this.setState({ successMessage: "Form submitted successfully" })
    // data can be seen in console open inspect=>console
    alert(`Form is sbmitted successfully`)
    console.log("FormData: ", obj)

  }


  render() {
    const { form, formValid, formError } = this.state;
    formValid.button = formValid.name && formValid.email && formValid.password
    
    return (
      <div className="row" style={{paddingTop:"10%",paddingBottom:"20%"}}>
        <div className="col-md-4 offset-4">
          <div className="card bg-dark text-light" style={{width:"150%",height:"120%"}}>
            <div className="card-body text-left">
              <form className="form" onSubmit={(e) => this.submitRegister(e)}>
                <div className="form-group">
                  <label>Name</label>

                  <input className="form-control" type="text"
                    value={form.name} id="name" name="name"
                    placeholder="Enter your name e.g: Vimlesh"
                    onChange={this.handleInputChange}
                    required />
                </div>
                <span className='text-danger'>{formError.name}</span>

                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" type="email"
                    value={form.email} id="email" name="email"
                    placeholder="Enter your emial e.g: john@gmail.com"
                    onChange={this.handleInputChange}
                    required />
                </div>
                <span className='text-danger'>{formError.email}</span>

                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control" type="password"
                    name="password" value={form.password}
                    placeholder="enter password having $#@ 1234 abc ABC"
                    min="6" max="10"
                    onChange={this.handleInputChange}
                    required></input>
                </div>
                <span className='text-danger'>{formError.password}</span>
                <div>
                  <button type="submit" className="btn btn-success txt-center" disabled={!formValid.button}>Submit</button><br />
                  {formValid?<span className='text-success'>{this.state.successMessage}</span>:
                  this.state.errorMessage && <span className='text-danger'>{this.state.errorMessage}</span>}
                </div>

              </form>
              
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Form;