import React from 'react'
import '../stylesheets/payment.css';
export default function Payment() {
    return (
        <div >
            <div className="abv">
             <div className ="container">           
             <div className ="row">
             <div className="col-md-5">
             <h1 className="h">Payment Getway</h1>
                {/* <img className="add" src="https://www.vhv.rs/dpng/d/17-174904_transparent-credit-card-logos-png-png-download.png" alt="" /> */}
                <div className="idea" >
                <div className="col-md-10">
    <label for="input" className="form-label">Card Number</label>
    <input type="number" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-10">
    <label for="input" className="form-label">Months</label>
    <input type="month" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-10">
    <label for="input" className="form-label">CVV</label>
    <input type="number" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-10">
    <label for="input" className="form-label">Cardholder Name</label>
    <input type="number" className="form-control" id="inputEmail4"/>
    <br />
  </div>
  <button className="bt4" type="submit">PayNow</button>
  </div>
           </div>
        </div>    
               
       </div>
       </div>
       </div>
  )
}
