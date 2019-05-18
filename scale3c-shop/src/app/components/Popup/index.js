import React from 'react';
import './index.scss'


class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [],
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    this.setState(state => {
      const list = state.list.concat(state.value);

      return {
        list,
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
            <h2>Here i am</h2>
            <a class="close" href="#">&times;</a>
            <div class="content">
              <div>
                <ul>
                  {this.state.list.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.onChangeValue}
                />
                <button
                  type="button"
                  onClick={this.onAddItem}
                  disabled={!this.state.value}
                >
                  Add
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