
// ex 6.12
import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()

  const filterHandler = (e) => {
    dispatch(filterChange(e.target.value.trim().toLowerCase()))
  }

  return (
    <input type="text" placeholder="search" onChange={filterHandler} />
  )
}

export default Filter