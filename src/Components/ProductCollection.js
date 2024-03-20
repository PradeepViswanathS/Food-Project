import React from 'react'
import Productcard from './Productcard'
import Hotels from '../store/Hotel'

function ProductCollection() {

  return (
     <div className=' grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 '>
    { Hotels.map((x) => {  
      return<Productcard  key={x.id} Images={x.image} name={x.name} Rate={x.rate} Time={x.time} Area={x.area}/>
      })}
    </div>
  )
}

export default ProductCollection
