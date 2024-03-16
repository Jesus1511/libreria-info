import {useContext, useState} from "react"
import { booksInfo } from "../App"

export const CreateBook = () => {

  const {booksList ,setBookList, setHome} = useContext(booksInfo)

  const [namen, setNamen] = useState(" ");
  const [imgn, setImgn] = useState(null);
  const [desc, setDesc] = useState(" ");

  function handleSubmit (){
    if(namen !== "" && imgn !== null && desc !== ""){
      setBookList(
        [...booksList, { name: namen, img: imgn, descript: desc, id:crypto.randomUUID()}])
      setHome(true)
    }
    else{
      alert("complete el formulario para crear el libro")
    }}

  return (
    <div>
      <form className="my-[60px]" action="">
        <label htmlFor="" className=" mb-[20px] text-[20px] font-bold translate-x-[-50%] w-[150px] block m-auto">Name</label>
        <input className="text-black block m-auto w-[300px] rounded-[5px] h-[40px]" onChange={(e)=>{setNamen(e.target.value)}} value={namen} type="text" />
      </form>
      <form className="my-[60px]" action="">
        <label htmlFor="" className=" mb-[20px] text-[20px] font-bold translate-x-[-50%] w-[150px] block m-auto">Img source</label>
        <input className=" cursor-pointer block m-auto w-[300px] rounded-[5px] h-[40px]" onChange={(e)=>{setImgn(e.target.files[0])}} type="file" />
      </form>
      <form className="my-[60px]" action="">
        <label htmlFor="" className=" mb-[20px] text-[20px] font-bold translate-x-[-50%] w-[150px] block m-auto">Description</label>
        <textarea className="text-black block m-auto w-[300px] rounded-[5px] h-[100px]" onChange={(e)=>{setDesc(e.target.value)}} value={desc} type="text" />
      </form>
      <button onClick={handleSubmit} className="bg-blue-800 sombra w-[90px] text-[20px] tracking-wider font-semibold h-[35px]  hover:shadow-white text-white">Subir</button>
    </div>
  )
}
