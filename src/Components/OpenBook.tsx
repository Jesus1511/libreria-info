import { useContext } from "react"
import { booksInfo } from "../App"

export const OpenBook = () => {

  const {openBook, booksList, setOpenBook} = useContext(booksInfo)

  return (
    <div>
      <div className="absolute top-[100px] bg-[#03161f] w-[85%] md:flex md:py-[40px] left-[50%] translate-x-[-50%] px-[20px] "> 

       <button className="md:mr-[20px] md:relative bottom-[240px] text-[35px] text-gray-300 hover:text-white transition" onClick={()=>{setOpenBook(null)}}>x</button>
       <div>
         <img className="w-[500px]" src={URL.createObjectURL(booksList[openBook].img)} alt="" />
       </div>
       <div className="md:ml-[50px]">
         <h1 className="text-center md:mt-[10px] mt-[30px] mb-[20px] tracking-wider text-[30px]">{booksList[openBook].name}</h1>
         <p className="text-center mb-[20px]">{booksList[openBook].descript}</p>
       </div>

      </div>

      <div>

      </div>
    </div>
  )
}
