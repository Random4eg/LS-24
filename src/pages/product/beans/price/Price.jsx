import React from 'react'
import '/src/pages/product/beans/price/Price.scss'

export const Price = () => {
  return (
    <div className="price__container">
    <div className="title">Price
        <div className="price"><span>$</span>10.50</div>
    </div>
    <button className='price-icon'>Add to Cart</button>
</div>

  )
}
