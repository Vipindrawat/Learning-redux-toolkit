import React from 'react'

const Shop = () => {

  return (
    <div className="d-flex flex-row justify-content-center my-4">
      <div className='inline-block mx-4 '>
        <button type="button" className="btn btn-primary">-</button>
        <button type="button" className="btn btn-secondary">add and deposit</button>
        <button type="button" className="btn btn-primary">+</button>
      </div>
      <div className='inline-block'>
        <button type="button" className="btn btn-primary">-</button>
        <button type="button" className="btn btn-secondary">Count</button>
        <button type="button" className="btn btn-primary">+</button>
      </div>
    </div>
  )
}

export default Shop;
