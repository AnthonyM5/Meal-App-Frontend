import { connect } from 'react-redux'
import { handleSearchForm } from '../redux/actionCreator'

const Filters = (props) => {
    // console.log(props)
  return(
    <form>
        <label>
          Search: 
          <input type="text" name="search" value={props.search} onChange={props.handleSearchForm} />
        </label>
      </form>
  )
}

const msp = (state) => ({
  ...state.foods.filtersForm.search
})

export default connect(msp, { handleSearchForm })(Filters)