import React from 'react';
import './App.css';
import Header from "./Header";

class App extends React.Component() {
  render() {
    return (
      <div className="App">
        <Header 
          title="My first Prop Passed" 
          buttonTitle="Button label"
        />
      </div>
    );
  }
}

export default App;
