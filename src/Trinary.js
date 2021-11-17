import React, { useState } from 'react'
import Diagram from './Diagram'

const gray = "#808080"
const black = "#000000"

function Trinary ({ id }) {
  const [string, setString] = useState("")
  const [color1, setColor1] = useState(gray)
  const [color2, setColor2] = useState(black)
  const colors = ["FFFFFF", color1, color2]
  const [showHelp, setShowHelp] = useState(false)

  const handleTextAreaChange = (e) => {
    setString(e.target.value)

    // these lines expand the textarea to the height of the content
    e.target.style.height = ""
    e.target.style.height = e.target.scrollHeight + "px"
  }

  const swapColors = () => {
    const newColor1 = color2
    const newColor2 = color1

    setColor1(newColor1)
    setColor2(newColor2)
  }

  const resetColors = () => {
    setColor1(gray)
    setColor2(black)
  }

  return (
    <div id={id} className="Trinary">
      <textarea type="text" name="string" onChange={handleTextAreaChange} placeholder="enter text here"/>
      <br />
      <div
        onMouseEnter={(e) => setShowHelp(true)}
        onMouseLeave={(e) => setShowHelp(false)}
      >
        <input type="text" name="color1" style={{ color: color1 }} onChange={(e) => setColor1(e.target.value)} value={color1} aria-label="input for color 1"/>
        <input type="text" name="color2" style={{ color: color2 }} onChange={(e) => setColor2(e.target.value)} value={color2} aria-label="input for color 2"/>
      </div>
      <br />
      <button type="button" name="swap" onClick={swapColors}>swap</button>
      <button type="button" name="reset" onClick={resetColors}>reset</button>
      <p style={{ color: gray, visibility: showHelp ? "visible" : "hidden" }}>
        To change the colors, enter a hexcode (i.e. '#808000') or a CSS-recognized color name (i.e. 'olive').
      </p>
      <Diagram string={string} colors={colors} />
    </div>
  )
}

export default Trinary;
