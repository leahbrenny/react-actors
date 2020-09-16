import React, { Component } from "react";

class Contact extends Component {

  state = {
    firstName: '',
    lastName: '',
    bestImpression: '',
  }

  onFirstChange = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  onLastChange = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  onBestChange = (event) => {
    this.setState({
      bestImpression: event.target.value
    });
  }
  render() {
    
    let formMessage;
    if (this.state.firstName, this.state.lastName, this.bestImpression){
      formMessage = (this.state.firstName, this.state.lastName, "'s best impression is ", this.state.bestImpression)
    }

    return (
      <div>
        <h2>Contact</h2>
        <div>
        <input type='text' placeholder= 'First Name' onChange={this.onFirstChange}/>
        <input type='text' placeholder= 'Last Name' onChange={this.onLastChange}/>
        <input type='text' placeholder= 'Best Impression' onChange={this.onBestChange}/>
        <button onClick={this.onClickformMessage}>Join Us!</button>
        <p onClick={this.onClickformMessage}>{formMessage}</p>
        </div>
        <p>Phone: 1-800-NOT-CAGE</p>
        <p>Email:info@BetterThanCage.com</p>
      </div>
    );
  }
}

export default Contact;