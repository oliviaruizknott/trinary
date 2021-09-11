import React from 'react';
import Letter from './Letter'

class Diagram extends React.Component {
  renderLetters() {
    let stringSplit = this.props.string.split("")
    return stringSplit.map((letter, i) => {
      return (
        <div className="diagramRow">
          <Letter key={i} value={letter} />
          <Letter key={i} value={letter} reverse={true}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="Diagram">
        {this.renderLetters()}
      </div>
    );
  }
}

export default Diagram;
