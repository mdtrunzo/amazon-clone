import React, { useContext } from 'react'
import { StateContext } from '.././context/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [ {basket} ] = useContext(StateContext)

  return (
    <div className='checkout'>
      <div className="checkout-left">
      <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout-ad" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your shopping basket is empty</h2> 
          <p>You have no items in your basket. To buy one or more items, click 'Add to basket' next to the item</p>
        </div>
      ) : (
        <div>
          <h2 className='checkout-title'>Your Shopping Basket</h2>
          {basket?.map(item => {
          return (
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          )
          })}
        </div>
      )}
      </div>
      {basket.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout