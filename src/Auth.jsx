import { useDispatch, useSelector } from "react-redux";
import { ISLOGIN, NOTLOGIN } from "./REDUX/Types/Types";
const Auth = () => {
  let AuthData=useSelector(state=>state.AuthReducer.login);
  let dispatch=useDispatch()
  return (
    <div>
      {AuthData?(<h2>You are login</h2>):(<h2>You are not login</h2>)}
      <button onClick={()=>{dispatch({type:ISLOGIN})}}>Login</button>
      <button onClick={()=>{dispatch({type:NOTLOGIN})}}>Exit</button>
    </div>
  )
};
export default Auth;