import {ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../redux/action-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    gender: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        
        case REMOVE_FAV:
            
            return {
                    ...state,
                    myFavorites: state.gender === '' || state.gender === 'All'
                    ? action.payload
                    : action.payload.filter(fav => fav.gender === state.gender),
                    allCharacters: action.payload,
                    gender: ''
            }
            

        case FILTER:
            if(action.payload === 'All'){
                return {
                    ...state,
                    myFavorites: state.allCharacters
                }
            }
            return {
                ...state,
                myFavorites: state.allCharacters.filter(character =>character.gender === action.payload),
                gender: action.payload
            }
         
        case ORDER:
            if(action.payload === 'A')
            return{
                ...state,
                myFavorites: state.allCharacters.sort((a,b) => a.id - b.id)
            }
            if(action.payload === 'D')
            return{
                ...state,
                myFavorites: state.allCharacters.sort((a,b) => b.id - a.id)
            }
            else return{...state}
        default:
            return{...state}
    }
}

export default reducer;