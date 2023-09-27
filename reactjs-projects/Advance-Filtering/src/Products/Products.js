import { AiFillStar} from 'react-icons/ai';
import { BsFillBagFill} from 'react-icons/bs';
import './Products.css';

function Products() {
  return (
    <>
    <section className="card-container">
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg" alt="Shoe" className='card-img'/>
        <div className='card-details'>
          <h3 className='card-title'>Shoe</h3>
          <section className='card-reviews'>
          <AiFillStar className='ratings-start' />
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' />
          <span className='total-reviews'>5</span>
          </section>
        <section className='card-price'>
          <div className='price'>
            <del>$300</del> 200
          </div>
          <div className='bag'>
            <BsFillBagFill className='bag-icon'/>
          </div>
        </section>
        </div>
      </section>
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg" alt="Shoe" className='card-img'/>
        <div className='card-details'>
          <h3 className='card-title'>Shoe</h3>
          <section className='card-reviews'>
          <AiFillStar className='ratings-start' />
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' />
          <span className='total-reviews'>5</span>
          </section>
        <section className='card-price'>
          <div className='price'>
            <del>$300</del> 200
          </div>
          <div className='bag'>
            <BsFillBagFill className='bag-icon'/>
          </div>
        </section>
        </div>
      </section>
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg" alt="Shoe" className='card-img'/>
        <div className='card-details'>
          <h3 className='card-title'>Shoe</h3>
          <section className='card-reviews'>
          <AiFillStar className='ratings-start' />
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' />
          <span className='total-reviews'>5</span>
          </section>
        <section className='card-price'>
          <div className='price'>
            <del>$300</del> 200
          </div>
          <div className='bag'>
            <BsFillBagFill className='bag-icon'/>
          </div>
        </section>
        </div>
      </section>
    </section>
    </>
  )
}

export default Products;