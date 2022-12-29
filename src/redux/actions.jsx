const products =require('../db.json')
export const GET_ALL_PROD = "GET_ALL_PROD";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const CLEAN_FILTER = "CLEAN_FILTER";
export const CHANGE_FOUND="CHANGE_FOUND"



export function getAllProd(){

    return function (dispatch) {
        let json = products.products
        return dispatch({ type: GET_ALL_PROD, payload: json });
      };
}

export function searchByName(name){
    let json
    if(Number(name)) {
        json=products.products.filter(elem=>Number(elem.code) === Number(name))   
    }
    else if(typeof name === 'string') { 
        json=products.products.filter(elem=>elem.name.toUpperCase().includes(name.toUpperCase()))  
    }
    return function (dispatch) {
        if(json==='NOT FOUND') return{type:CHANGE_FOUND}
        else return dispatch({ type: SEARCH_BY_NAME, payload: json });
      };

}


export const cleanFilter = () => {
    return{type:CLEAN_FILTER}}


