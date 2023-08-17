import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT, RESET } from './REDUX/Types/Types';
const Counter = () => {
  let CounterData = useSelector((state)=>state.CounterReducer.Counter);
  let hampozo=useDispatch()
  return (
    <div>
      <h3>Counter:- {CounterData}</h3>
      <button onClick={()=>{hampozo({type:INCREMENT})}}>Increment</button>
      <button onClick={()=>{hampozo({type:DECREMENT})}}>Decrement</button>
      <button onClick={()=>{hampozo({type:RESET})}}>Reset</button>
    </div>
  )
}

export default Counter;
