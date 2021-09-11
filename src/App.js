import React, { useState } from 'react'
import Diagram from './Diagram'

function App () {
  const [string, setString] = useState("")
  const [color1, setColor1] = useState("#808080") // gray
  const [color2, setColor2] = useState("#000000") // black
  const colors = ["FFFFFF", color1, color2]

  const swapColors = () => {
    const newColor1 = color2
    const newColor2 = color1

    setColor1(newColor1)
    setColor2(newColor2)
  }

  return (
    <div className="App">
      <input type="text" name="string" onChange={(e) => setString(e.target.value)} placeholder="enter text here"/>
      <br />
      <input type="text" name="color1" style={{ color: color1 }} onChange={(e) => setColor1(e.target.value)} value={color1} />
      <input type="text" name="color2" style={{ color: color2 }} onChange={(e) => setColor2(e.target.value)} value={color2} />
      <button type="button" name="swap" onClick={swapColors}>swap</button>
      <Diagram string={string} colors={colors} />
    </div>
  )
}

export default App;
