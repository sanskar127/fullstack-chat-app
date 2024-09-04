import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../slices/Conversation/searchSlice"

const SearchInput = () => {
  const dispatch = useDispatch()
  const search = useSelector(state => state.search.value)

  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search" className=" flex-1 input input-bordered rounded-full" value={search}  onChange={e => dispatch(setSearch(e.target.value))} />
    </form>
  )
}

export default SearchInput
