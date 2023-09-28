import Input from '../../Components/input';
import './Category.css';

function Category({handleChange}) {
  return (
    <div >
      <h2 className="sidebar-title">Category</h2>
      <div>
          <label className='sidebar-lable-container'>
            <input onChange={handleChange} type="radio" value="" name="test"/>
            <span className="checkmark"></span>All
          </label>

      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="falts"
        title="Falts"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="sneakers"
        name="test"
      />

      </div>
    </div>
  )
}

export default Category;