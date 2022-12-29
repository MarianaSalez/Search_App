import {GET_ALL_PROD, SEARCH_BY_NAME, CLEAN_FILTER} from "./actions";


const initialState = {
  loading: true,
  products: [],
  filtered:[],
  filteredCond:false
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      // Acá va tu código:
      case GET_ALL_PROD:
        return {...state, products:action.payload}
      
      case SEARCH_BY_NAME:
        if (typeof(action.payload)==='string') return{...state, notFound:true}
        else return {...state, filtered:action.payload, filteredCond:true}
      
      case CLEAN_FILTER:
        return {...state, filtered:[],filteredCond:false}
    
    
      default:
        return state

     
  };
};

export default rootReducer;