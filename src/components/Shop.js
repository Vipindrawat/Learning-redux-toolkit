import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { withdraw, deposit } from '../redux/slice/bank';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(withdraw);
    console.log(deposit);

  }, [])


  return (
    <div className="d-flex flex-row justify-content-center my-4">
      <div className='inline-block mx-4 '>
        <button onClick={() => dispatch(withdraw(100))} type="button" className="btn btn-primary">-</button>
        <button type="button" className="btn btn-secondary">add and deposit</button>
        <button onClick={() => dispatch(deposit(100))} type="button" className="btn btn-primary">+</button>
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
