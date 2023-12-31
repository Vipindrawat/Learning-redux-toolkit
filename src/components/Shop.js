import React from 'react'
import { useDispatch } from 'react-redux';
import { withdraw, deposit } from '../redux/slice/bank';
import { increment, decrement } from '../redux/slice/counter';

const Shop = () => {
  //usedispatch hook is a simple way to get access to a function(aciton creators) that allows you to dispatch actions to your Redux store:
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-row justify-content-center my-4">
      <div className='inline-block mx-4 '>
        <button onClick={() => dispatch(withdraw(100))} type="button" className="btn btn-primary">-</button>
        <button type="button" className="btn btn-secondary">add and deposit</button>
        <button onClick={() => dispatch(deposit(100))} type="button" className="btn btn-primary">+</button>
      </div>
      <div className='inline-block'>
        <button onClick={() => { dispatch(decrement()) }} type="button" className="btn btn-primary">-</button>
        <button type="button" className="btn btn-secondary">Count</button>
        <button onClick={() => { dispatch(increment()) }} type="button" className="btn btn-primary">+</button>
      </div>
    </div>
  )
}

export default Shop;
