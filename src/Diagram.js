import Letter from './Letter'

function Diagram(props) {
  const renderLetters = () => {
    let stringSplit = props.string.split("")
    return stringSplit.map((letter, i) => {
      return (
        <div key={i} className="diagramRow">
          <Letter key={i} id={i} value={letter} />
          <Letter key={`${i}-reverse`} id={`${i}-reverse`} value={letter} reverse={true}/>
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
