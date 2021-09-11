import React, { useState } from 'react'
import Diagram from './Diagram'

function App () {
  const [string, setString] = useState("")

  const updateString = (e) => {
    setString(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" name="string" onChange={updateString} placeholder="enter text here"/>
      <Diagram string={string} />
    </div>
  )
}

export default App;
