import { FETCH } from "../Types/Types"

export const Api2Reducer=(state={api2:[]},action)=>{
    switch(action.type){
        case FETCH:
            return {api2:action.hamada};
        default:
            return state;
    };
};
