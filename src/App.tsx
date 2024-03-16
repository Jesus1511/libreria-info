import { BooksList } from "./Components/BooksList.tsx"
import { OpenBook } from "./Components/OpenBook.tsx"
import { CreateBook } from "./Components/CreateBook.tsx"
import {useState, createContext} from "react"

export const booksInfo = createContext({})

export const App = () => {

 const [home, setHome] = useState(true)
 const [openBook, setOpenBook] = useState(null)

 const [booksList, setBookList] = useState([])

  return (
    <>
    <booksInfo.Provider value={{booksList, setBookList, openBook, setOpenBook, setHome}}>
      <nav className="bg-[#03161f] h-[65px] flex items-center justify-center ">
        <button className="text-white hover:bg-white h-[65px] text-center w-[100px] hover:text-[#03161f]" onClick={()=>{setHome(true)}}>Home</button>
        <button className="text-white hover:bg-white h-[65px] text-center w-[100px] hover:text-[#03161f]" onClick={()=>{setHome(false)}}>Create</button>
      </nav>
      {
      openBook !== null && (
        <OpenBook />
      )}
      {home ? 
        (<BooksList />):
        (<CreateBook />)
    }
    </booksInfo.Provider>
    </>
  )
}
