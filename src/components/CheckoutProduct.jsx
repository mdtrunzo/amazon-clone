function CheckoutProduct({id, title, image, price, rating}) {
    const removeFromBasket = () => {
        console.log('ok')
    }
  return (
    <div className="checkout-product">
        <img src={image} alt={title} className="checkout-product-image"/>
        <div className="checkout-product-info">
            <p className="checkout-product-title">{title}</p>
            <p className="checkout-product-price">
             <small>$</small>
             <strong>{price}</strong>
            </p>
            <div className="checkout-product-rating">
             {
               Array(rating)
               .fill()
               .map((_) => (
                 <p>⭐️</p>
               ))
             }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct