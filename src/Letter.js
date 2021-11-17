import Cell from './Cell'
import { convertToNumber, numberInTrinaryObject } from './utils'

function Letter({ id, letter, colors, reverse }) {
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
