import React from "react";
import './App.scss';
import Modal from '../modal';

class App extends React.Component {
  state = {
    openModal: false
  }

  toggleModal = () => {
    this.setState(state => {
      return {
        openModal: !state.openModal
      };
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>Открыть</button>
        {
          this.state.openModal && (
            <Modal closeModal={this.toggleModal} />
          )
        }
      </div>
    )
  }
}

export default App;
