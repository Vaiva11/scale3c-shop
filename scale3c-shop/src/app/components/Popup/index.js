import React from 'react';
import './index.scss'


class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      conversation: [],
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    this.setState(state => {
      const conversation = state.conversation.concat(state.value, <div className='responce'>Thank you for your message</div>);

      return {
        conversation,
        value: '',
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div class="box">
          <a class="button" href="#popup1">💬</a>
        </div>

        <form id="popup1" class="overlay">
          <div class="popup">
            <h2>Contact us</h2>
            <a class="close" href="#">✖️</a>
            <div class="Content">
              <ul>
                {this.state.conversation.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="Content--input">
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.onChangeValue}
                />
                <button
                  onClick={this.onAddItem}
                  disabled={!this.state.value}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Popup;