import {useContext} from "react"
import { booksInfo } from "../App"

interface Book {
    name:string
    img:any
    descript:string
    id: string
}

export const BooksList = () => {

  const {booksList, setOpenBook} = useContext(booksInfo)

  return (
    <div className=" mt-[50px] grid grid-cols-[1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr,1fr] md:mx-[50px] mx-[15px]  gap-[15px] justify-center">
    {
        booksList.length == 0 && (
          <div className="mt-[40px]">
            <p>No existen libros aun</p>
          </div>
        )}{
        booksList.map((book : Book, index: number)=>(
            <div onClick={()=>{setOpenBook(index)}} key={index} className="cursor-pointer ">
                <img className="w-[200px] sombra2" src={URL.createObjectURL(book.img)} alt="" />
                <h2>{book.name}</h2>
            </div>
        ))}
    </div>
  )
}
