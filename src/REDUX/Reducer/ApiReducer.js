import { FETCHAPI } from "../Types/Types";
export const ApiReducer=(state={api:[],pages:0},action)=>{
    switch(action.type){
        case FETCHAPI:
            return{api:action.payload,pages:action.pages};
        default:
            return state
    };
};