import React from 'react';
import './index.scss'


class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateInput(event) {
    this.setState({ username: event.target.value })
  }

  handleSubmit() {
    console.log('Your input value is: ' + this.state.username)
    return <div>thanks</div>
    //Send state to the server code
  }
  render() {
    return (
      <React.Fragment>
        <div class="box">
          <a class="button" href="#popup1">💬</a>
        </div>

        <form id="popup1" class="overlay">
          <div class="popup">
            <h2>Here i am</h2>
            <a class="close" href="#">&times;</a>
            <div class="content">
              <p>{this.state.username}</p>
              <p>{this.handleSubmit()}</p>
            </div>
            <input type="text" onClick={this.updateInput}></input>
            <button type="button" onClick={this.handleSubmit} >send</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Popup;