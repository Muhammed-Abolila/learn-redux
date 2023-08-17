import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT, RESET } from './REDUX/Types/Types';
const NavBarCounter = () => {
    let NavBarCounter=useSelector(state=>state.CounterReducer.Counter);
    let dispatch=useDispatch();
  return (
    <div>
      <h3>Items:- {NavBarCounter}</h3>
      <button onClick={()=>{dispatch({type:INCREMENT})}}>+</button>
      <button onClick={()=>{dispatch({type:DECREMENT})}}>-</button>
      <button onClick={()=>{dispatch({type:RESET})}}>Reset</button>
    </div>
  )
}

export default NavBarCounter;
