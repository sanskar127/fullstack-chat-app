import { useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search'
import { useDispatch } from "react-redux"
import { setSelectedConversation } from "../slices/Conversation/conversationsSlice"
import useGetConversation from "../hooks/useGetConversations"
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState("")
  // useSetConversation
  const dispatch = useDispatch()
  const { conversations } = useGetConversation()

  const handleSubmit = e => {
    e.preventDefault()
    if (!search) { return }
    if (search.length <= 0) {
      return toast.error("Search: Atleast 3 characters required")
    }

    const conversation = conversations.find(c => c.fullname.toLowerCase())

    if (conversation) {
      dispatch(setSelectedConversation(conversation))
      setSearch("")
    } else { toast.error("Search: User Not Found!") }
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" className="input input-bordered rounded-full" value={search} onChange={e => setSearch(e.target.value)} />
      {/* <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <SearchIcon className="w-5 h-5 outline-none" />
      </button> */}
    </form>
  )
}

export default SearchInput
