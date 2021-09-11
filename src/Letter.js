import Cell from './Cell'

function Letter({ id, value, colors, reverse }) {
  const convertToNumber = (letter) => {
    // handle space
    if (letter.charCodeAt(0) === 32) {
      return 0
    }

    return letter.toLowerCase().charCodeAt(0) - 96
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

  const number = convertToNumber(value)
  const trinaryObject = numberInTrinaryObject(number)

  return (
    <div className={`Letter ${reverse ? "reverse" : ""}`}>
      <Cell key={`${id}-9`} fill={getFill(9)} />
      <Cell key={`${id}-3`} fill={getFill(3)} />
      <Cell key={`${id}-1`} fill={getFill(1)} />
    </div>
  )
}

export default Letter;
