import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    console.log("Name changed")
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    alert(`Submitted name: ${this.state.name}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.value}
          />
        </label>
        <button type="submit">Submit</button>
        <p>Name: {this.state.name}</p>
      </form>
    );
  }
}

export default App;
