import { connect } from 'react-redux'
import { handleSearchForm } from '../redux/actionCreator'
import cuid from 'cuid'

const Filters = (props) => {
    // console.log(props)
  return(
    <form>
        <label>
          Search: 
          <input type="text" name="search" value={props.search} onChange={props.handleSearchForm} onSubmit={props.preventSubmit}  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}/>
          <label>
            Sort by Calories:
          <input 
          key={cuid()}
          name="calories"
          type="checkbox"
          checked={props.calories}
          onChange={props.handleSearchForm}>
          </input>
          </label>
        </label>
      </form>
  )
}

const msp = (state) => ({
  ...state.foods.filtersForm
})

export default connect(msp, { handleSearchForm })(Filters)