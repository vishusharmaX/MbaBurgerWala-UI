import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
   <section className='paymentsuccess'>
    <main>
        <h1>Order Confirmed</h1>
        <p>Order Place Successfully,You can Check order Status below</p>
        <Link to='/myorder'>Check Status</Link>
    </main>

   </section>
  )
}

export default PaymentSuccess
