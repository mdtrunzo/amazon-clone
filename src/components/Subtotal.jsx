import CurrencyFormat from 'react-currency-format'
import { useContext } from 'react'
import { StateContext } from '.././context/StateProvider'
import { getBasketTotal } from '../context/reducer'

function Subtotal() {
  const [{basket}, dispatch ] = useContext(StateContext)
  return (
    <div className="subtotal">
        <CurrencyFormat 
        renderText={(value) => (
            <>
             <p>
                 Subtotal: ({basket.length} items: <strong>{value}</strong>)
             </p>
             <small className='subtotal-gift'>
                 <input type="checkbox" /> This order contains a gift
             </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal