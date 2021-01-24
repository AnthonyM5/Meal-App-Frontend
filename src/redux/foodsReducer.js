const nullObj = {
    id: "",
    name: ""
}


const initialState = {
    foods: [],
    filtersForm: {
      search: "",
      filter: "",
      calories: false

    },

    selectedFood: nullObj,
  }

const foodsReducer = (state=initialState, action) => {
      switch(action.type){
        case 'SET_FOODS':
          return {...state, foods: action.payload}
        case 'SET_SELECTED_FOOD':
            return {...state, selectedFood: action.payload }
        case 'FILTERS_FORM_CHANGE':
          console.log(action.payload)
          return {...state, filtersForm: {
            ...state.filtersForm,
            [action.payload.name]: action.payload.value
          }}

        case 'UNSET_FILTERS':
          // console.log('start')
          return {...state, filtersForm: {
            ...state.filtersForm, 
            search: "",
            filter: ""
          }}
        case 'UNSET_FOODS':
            return {...state, selectedFood: nullObj}
        default:
          return {...state}
      }
    }
  
export default foodsReducer