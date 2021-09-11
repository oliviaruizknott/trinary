function Cell({ value, fill }) {
  return <div className={`Cell fill-${value}`} style={{ background: `#${fill.replace('#', '')}` }}></div>
}

export default Cell;
