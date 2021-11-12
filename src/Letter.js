import Cell from './Cell'

function Letter({ id, letter, colors, reverse }) {
  const convertToNumber = (l) => {
    // Subtracting 96 from the charCode gets us to a = 1, z = 26, etc.
    const asNumber = l.toLowerCase().charCodeAt(0) - 96

    // If the character is anything other than a letter, just treat it as a
    // space. The character will still be visible in the text, but a blank row
    // will appear in the diagram.
    if (asNumber < 1 || asNumber > 26) {
      return 0;
    }

    return asNumber;
  }

  const numberInTrinaryObject = (num) => {
    let trinaryPlaces = [9,3,1]
    let trinaryObject = {}

    const reducer = (previousValue, place) => {
      trinaryObject[place] = Math.trunc(previousValue/place)
      return num%place
    }

    trinaryPlaces.reduce(reducer, num)
    return trinaryObject
  }

  const getFill = (num) => {
    return colors[trinaryObject[num]]
  }

  const number = convertToNumber(letter)
  const trinaryObject = numberInTrinaryObject(number)

  return (
    <div className={`Letter ${reverse ? "reverse" : ""}`}>
      <Cell key={`${id}-9`} fill={getFill(9)} value={trinaryObject[9]}/>
      <Cell key={`${id}-3`} fill={getFill(3)} value={trinaryObject[3]}/>
      <Cell key={`${id}-1`} fill={getFill(1)} value={trinaryObject[1]}/>
    </div>
  )
}

export default Letter;
