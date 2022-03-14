import { useContext } from "react"
import { StateContext } from '.././context/StateProvider'

function Product({ id, title, price, rating, image }) {
  const [{basket}, dispatch] = useContext(StateContext)

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    })
  }

  return (
    <div className="product">
      <div className="product-info">
       <p>{title}</p>
       <p className="product-price">
         <small>$</small>
         <strong>{price}</strong>
       </p>
       <div className="product-rating">
        {
          Array(rating)
          .fill()
          .map((_) => (
            <p>⭐️</p>
          ))
        }
       </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product