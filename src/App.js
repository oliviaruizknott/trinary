import React from 'react';

import Diagram from "./Diagram"

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      string: ""
    }

    this.updateString = this.updateString.bind(this)
  }

  updateString(e) {
    this.setState({ string: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <input type="text" name="string" onChange={this.updateString} placeholder="enter text here"/>
        <Diagram string={this.state.string} />
      </div>
    );
  }
}

export default App;
