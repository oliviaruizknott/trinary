import React from 'react';

class Cell extends React.Component {
  render() {
    return (
      <div className={`Cell fill-${this.props.fill}`}></div>
    );
  }
}

export default Cell;
