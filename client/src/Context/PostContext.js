import React,{createContext,useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
export const ContextPost=createContext();
const PostContext = (props) => {
    const [data,setData]=useState([])
    const [post,setPost]=useState({
      baslik: "",
      yer: "",
      acikla: "",
      pansiyon: "",
      price: "",
      selectedFile: "",
    
      randevu: "",
    }
  )
    const [detay, setDetay] = useState({});
     const Response=async ()=>{
        try {  
            await axios.get("http://localhost:9363/post/panel")
            .then((response)=>{
                setData(response.data)
            })
            
        } catch (error) {
             console.log(error)
        }
     }
 
     const Delete=async (id)=>{
      try {
         await axios.delete(`http://localhost:9363/post/panel/${id}`)
         .then((response)=>{
          setData(response.data.filter((item)=>item._id !== id))
          Response()
         })
      } catch (error) {
        
      }
     }
     const FetchDetay = async (id) => {
      try {
        const response = await axios.get(`http://localhost:9363/post/detay/${id}`);
        setDetay(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const navigate=useNavigate()
  const ekle=async(e)=>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:9363/post/panel",post)
          navigate("/panel")
          setPost({
            baslik: "",
            yer: "",
            acikla: "",
            pansiyon: "",
            price: "",
            selectedFile: "",
          
            randevu: "",
          }
        )
    } catch (error) {
      
    }
  }
  const handleChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }
  return (
    <>
     <ContextPost.Provider value={{data,Delete,detay,FetchDetay,Response,ekle,post,setPost,handleChange}}>
       {props.children}
     </ContextPost.Provider>
    </>
  )
}

export default PostContext