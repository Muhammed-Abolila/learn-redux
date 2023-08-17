import { ChangeAuthState } from "../Actions/Actions";
import { ISLOGIN, NOTLOGIN } from "../Types/Types";
export const AuthReducer=(state={login:false},action)=>{
    switch(action.type){
        case ISLOGIN:
            return ChangeAuthState(action);
        case NOTLOGIN:
            return ChangeAuthState(action);
        default:
            return state
    }
};