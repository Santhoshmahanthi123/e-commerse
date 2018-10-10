import React, { Component } from 'react';
// import './SignUp.css'

class SignUp extends Component {

   check =() =>{
     //to check for password matching
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }
  
  handleClick=(e)=>{
    //e.preventDefault();
    console.log("Clicked SignUp button");
    
  }

  onSubmit = (e) =>{
    //setup database connection
  }
  render() {
    return (
      <div id="id01" className="modal" style={{display: this.props.signup? "block": "none"}}>
      <form className="modal-content animate" onSubmit={this.onSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required onChange={e => this.setState({username:e.target.value})}/>
    
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" id="password" placeholder="Enter Password" name="password" required onKeyUp={this.check} onChange={e => this.setState({password:e.target.value})}/>
    
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" id="confirm_password" name="psw-repeat" required onKeyUp={this.check} onChange={e => this.setState({repPassword:e.target.value})}/>
          <span id='message'></span>
          <label>
            <input type="checkbox" name="remember"  style={{marginBottom:15}} onChange={this.props.handleChange} value={this.props.checkedValue}/> Remember me
          </label>
    
          <p>By creating an account you agree to our <a href="" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
    
          <div className="clearfix">
            <button type="button" onClick={this.props.handleSignUp} className="cancelbtn">Cancel</button>
            <button type="submit" >Sign Up</button>
          </div>
        </div>
      </form>
    </div>
    
    );
  }
}

export default SignUp;