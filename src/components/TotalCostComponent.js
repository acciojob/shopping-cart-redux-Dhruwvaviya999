import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const TotalCostComponent = () => {
    const cartProducts = useSelector(state => state.cart.cart);
    console.log(cartProducts);
    const [selectedValue, setSelectedValue] = useState("");
    let totalCost = 0;
    cartProducts.forEach((item) => {
        totalCost += (item.price * item.count);
    })

    let totalFinalCost = (totalCost + (totalCost * 18/100))
    totalFinalCost = selectedValue ? totalFinalCost - (totalFinalCost * parseInt(selectedValue.slice(-2))/100) : totalFinalCost;
    


  return (
    <>
        <h2 className="total-cost-heading">The Total Amout is</h2>
        <hr />

        <div className='temporaryAmout'>
            <p>Temporary Amount: </p>
            <span>${totalCost.toFixed(2)}</span>
        </div>
        <div className='shippingCharges'>
            <p>Shipping Charges: </p>
            <span>Free</span>
        </div>
        <hr />
        <div className='totalAmount'>
            <div>
                <p>Total Amount of</p>
                <p>(Including VAT 18%)</p>
            </div>
            <span>${totalFinalCost.toFixed(2)}</span>
        </div>
        <div className='checkuout'>
            <button className='checkoutBtn'>Go To Checkout</button>
        </div>
        <div className='applyPromoDiv'>
            <select onChange={(e) => setSelectedValue(e.target.value)} value={selectedValue} style={{backgroundColor:'transparent', color:'black'}} name="promoCode" id="promoCode">
                <option value="">Add a Discount Coupon (optional)</option>
                <option value="DHRUW25">DHRUW25</option>
                <option value="JAINI15">JUICE15</option>
                <option value="KANTA30">WRLD30</option>
                <option value="BHANJI50">JAINI50</option>
            </select>
        </div>
    </>
  )
}

export default TotalCostComponent
