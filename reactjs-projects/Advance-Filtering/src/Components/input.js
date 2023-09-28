function input({handleChange, value, title, name, color,}) {
  return (
    <label className="sidebar-lable-container">
        <input onChange={handleChange} type="radio" value={value} name={name} className=""/>
        <span className="checkmark" style={{backgroundColor:color}}></span>{title}
    </label>
  )
}
export default input;
