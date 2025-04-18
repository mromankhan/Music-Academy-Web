import { Loader } from "lucide-react"

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black"><Loader size={80} className="text-white animate-spin" /></div>
  )
}

export default loading