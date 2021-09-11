import Cell from './Cell'

function Letter(props) {
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

  const number = convertToNumber(props.value)
  const trinaryObject = numberInTrinaryObject(number)
  const reverse = props.reverse ? "reverse" : ""

  return (
    <div className={`Letter ${reverse}`}>
      <Cell key={`${props.id}-9`} fill={trinaryObject[9]} />
      <Cell key={`${props.id}-3`} fill={trinaryObject[3]} />
      <Cell key={`${props.id}-1`} fill={trinaryObject[1]} />
    </div>
  )
}

export default Letter;
