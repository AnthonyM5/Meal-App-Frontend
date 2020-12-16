const nullObj = {
    id: null,
    name: ""
}


const initialState = {
    foods: [],
    selectedFood: nullObj
  }

const foodsReducer = (state=initialState, action) => {
      switch(action.type){
        case 'SET_FOODS':
          return {...state, foods: action.payload}
        case 'SET_SELECTED_RESTAURANT':
            return {...state, selectedFood: action.payload }
        case "UNSET_FOODS":
            return {...state, selectedFood: nullObj}
        default:
          return {...state}
      }
    }
  
export default foodsReducer