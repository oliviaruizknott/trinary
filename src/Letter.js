import React from 'react'

import Cell from './Cell'

class Letter extends React.Component {
  convertToNumber(letter) {
    // handle space
    if (letter.charCodeAt(0) === 32) {
      return 0
    }

    return letter.toLowerCase().charCodeAt(0) - 96
  }

  numberInTrinaryObject(num) {
    let trinaryPlaces = [9,3,1]
    let trinaryObject = {}

    const reducer = (previousValue, place) => {
      trinaryObject[place] = Math.trunc(previousValue/place)
      return num%place
    }

    trinaryPlaces.reduce(reducer, num)
    return trinaryObject
  }

  render() {
    const number = this.convertToNumber(this.props.value)
    const trinaryObject = this.numberInTrinaryObject(number)
    const reverse = this.props.reverse ? "reverse" : ""
    
    return (
      <div className={`Letter ${reverse}`}>
        <Cell fill={trinaryObject[9]} />
        <Cell fill={trinaryObject[3]} />
        <Cell fill={trinaryObject[1]} />
      </div>
    );
  }
}

export default Letter;
