function Cell({ value, fill }) {
  return <div className={`Cell fill-${value}`} style={{ background: `${fill}` }}></div>
}

export default Cell;
