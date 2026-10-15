import React from 'react'
import CustomerForm from '../components/CustomerForm'
import CustomerPreview from '../components/CustomerPreview'

const AddCustomer = () => {
  return (
    <div>
      Register Customer
      <CustomerForm/>
      <CustomerPreview/>
    </div>
  )
}

export default AddCustomer
