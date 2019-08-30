import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Components/Buttons/Buttons';
import ProgressBar from './Components/ProgressBar/PogressBar';
import Select from './Components/Select/Select';



class App extends React.Component {
  state = [
    { key: "o1", value: "Option 1" },
    { key: "o2", value: "Option 2" },
    { key: "o3", value: "Option 3" }
  ];

  render() {

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
      <h1>{this.props.title}</h1>
        <ProgressBar />
        <br />
        <ProgressBar />
        <br />
        <ProgressBar />
        <Buttons />
        <Select options={this.state}/>
      </main>
    </div>
    );
  }
}

export default App;
