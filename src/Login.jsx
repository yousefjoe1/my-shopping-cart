// import React from 'react';
import React, { Component } from 'react'


class Login extends React.Component {
    state = {
        clickd: true
    }
    
    handlesubmit = (e) => {
      e.preventDefault();
      this.setState({clickd: false})
      setTimeout(() => {
          this.props.history.replace('/shopping-cart')
      }, 9000);

      this.props.onReset()
    }
    render (){
        return (
            <React.Fragment>
                <h1 className='log-h1' >Order Form</h1>
                {this.state.clickd ?<form className='form' onSubmit={this.handlesubmit} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="number"/>
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-primary">Order Now <span style={{fontSize: 40,marginLeft: 10}}>&#127869;</span> </button>
                    
                </form>
                :<div className='sub-done' >
                    <h3>Orderd Done ... Thank You.</h3>
                    <h3>This Order Will Be At Your Home Between 10 to 15 Minutes. <span style={{fontSize: 40,marginLeft: 10}}>&#128667;</span></h3>
                    
                    <h3>You Will Be Dircted To The Home Page Now..</h3>
                </div> }
                

            </React.Fragment>
        );
    }
}
 
export default Login;