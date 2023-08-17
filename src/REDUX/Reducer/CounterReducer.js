import { ChangeCounterState} from "../Actions/Actions";
import { DECREMENT, INCREMENT, RESET } from "../Types/Types";
export const CounterReducer=(state={Counter:0},action)=>{
    switch(action.type){
        case INCREMENT:
            return(ChangeCounterState(state,action));
        case DECREMENT:
            return(ChangeCounterState(state,action));
        case RESET:
            return{Counter:0};
        default:
            return state
    }
}; 