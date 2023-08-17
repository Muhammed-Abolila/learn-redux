import { DECREMENT, FETCH, FETCHAPI, INCREMENT, ISLOGIN, MAINAPI, NOTLOGIN } from "../Types/Types";
import axios from "axios"
export function ChangeCounterState(state,action){
    if(action.type===INCREMENT){
        return{Counter:state.Counter+1}
    }else if(action.type===DECREMENT){
        return{Counter:state.Counter-1}
    };
};

export function ChangeAuthState(action){
    if(action.type===ISLOGIN){
        return({login:true})
    }else if(action.type===NOTLOGIN){
        return({login:false})
    }
}

 export const fetchData=()=>{
    return async(dispatch)=>{
        let response= await axios.get(MAINAPI)
        dispatch({type:FETCHAPI,payload:response.data.results,pages:response.data.total_pages})
    }
};

export  function fetchApi2(){
    return async(dispatch)=>{
        let response=await axios.get(MAINAPI);
        dispatch({type:FETCH,hamada:response.data.results})
    }   
}






