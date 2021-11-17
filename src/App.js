import React, { useState } from 'react'
import About from './About'
import Trinary from './Trinary'

function App () {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="App">
      {!showAbout && <Trinary />}
      {showAbout && <About closeAbout={(e) => setShowAbout(false)}/>}
      <button className="aboutButton clickable" onClick={(e) => setShowAbout(!showAbout)}>{showAbout ? "← back" : "about"}</button>
    </div>
  )
}

export default App;
