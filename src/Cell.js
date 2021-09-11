function Cell({ fill }) {
  return <div className="Cell" style={{ background: `#${fill.replace('#', '')}` }}></div>
}

export default Cell;
