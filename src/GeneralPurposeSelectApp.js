import React from 'react';

const starWarsOptions = {
  rey: "Rey",
  luke: "Luke Skywalker",
  leia: "Leia Organa",
  finn: "Finn (FN-2187)",
  kylo: "Kylo Ren"
};

const petOptions = {
  cat: "Cat",
  dog: "Dog",
  fish: "Fish",
  iguana: "Iguana"
};

const numbers = [1, 2, 2.5, 3, 4, 5, 6, 7]

class MySelect extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onValueChange(event.target.value)
  }

  render() {
    return (
      <select value={this.props.value} onChange={this.handleChange}>
        {Object.keys(this.props.options).map(key => (
          <option value={key} key={key}>
            {this.props.options[key]}
          </option>
        ))}
      </select>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWars: "rey",
      pet: "cat"
    };
    this.handleStarWarsChange = this.handleStarWarsChange.bind(this)
    this.handlePetChange = this.handlePetChange.bind(this)
  }

  handleStarWarsChange(starWars) {
    this.setState({
      starWars: starWars
    })
  }

  handlePetChange(pet) {
    this.setState({
      pet: pet
    })
  }

  render() {
    const squares = numbers.map(num => num * num)
    console.log("== squares:", squares)
    return (
      <form>
        <ul>
          {numbers.map(num => <li key={num.toString()}>{num}</li>)}
        </ul>
        <MySelect
          options={starWarsOptions}
          value={this.state.starWars}
          onValueChange={this.handleStarWarsChange}
        />
        <MySelect
          options={petOptions}
          value={this.state.pet}
          onValueChange={this.handlePetChange}
        />
        {/* <select>
          <option value="rey">Rey</option>
          <option value="luke">Luke Skywalker</option>
          <option value="leia">Leia Organa</option>
          <option value="finn">Finn (FN-2187)</option>
          <option value="kylo">Kylo Renn</option>
        </select> */}
        <button type="submit">Submit</button>
        <p>{starWarsOptions[this.state.starWars]} loves their {petOptions[this.state.pet]}</p>
      </form>
    );
  }
}

export default App;
