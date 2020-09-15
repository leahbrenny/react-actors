import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <div>
        <input type='text' placeholder= 'First Name'/>
        <input type='text' placeholder= 'Last Name'/>
        <input type='text' placeholder= 'Best Impression'/>
        <button>Join Us!</button>
        </div>
        <p>Phone: 1-800-NOT-CAGE</p>
        <p>Email:info@BetterThanCage.com</p>
      </div>
    );
  }
}

export default Contact;