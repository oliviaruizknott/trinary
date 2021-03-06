import Letter from './Letter'

function Diagram({ string, colors }) {
  const renderLetters = () => {
    let stringSplit = string.split("")
    return stringSplit.map((letter, i) => {
      return (
        <div key={i} className="diagramRow">
          <Letter key={i} id={i} letter={letter} colors={colors} />
          <Letter key={`${i}-reverse`} id={`${i}-reverse`} letter={letter} colors={colors} reverse={true}/>
        </div>
      )
    })
  }

  return (
    <div className="Diagram">
      {renderLetters()}
    </div>
  )
}

export default Diagram;
