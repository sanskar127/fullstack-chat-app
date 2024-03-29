import axios from "axios"
import { useEffect } from "react"

const Test = () => {

    useEffect(() => {
      axios.get("http://localhost:5000/api/users")
    }, [])

  return (
    <div>
      <h1>Test API</h1>
    </div>
  )
}

export default Test
