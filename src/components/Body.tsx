import axios from "axios";
import DesktopCard from "./DesktopCard";
import { useEffect,useState } from "react";

const baseurl =
  "https://api.unsplash.com/photos/?client_id=QiEe2pR0aGPwvYAkj8wOolp3LJOCggwxETxwuwb1rcg";

const Body = () =>{
  const [imgData,setImgData] = useState([]);
  async function getImages(){
    try{
      axios.get(baseurl).then((res)=>{
        setImgData(res.data);
        console.log(res.data);
      }).catch((e)=>{
        console.log(e);
      })
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    getImages();
  },[])
  return (
    <div>
      <div>
      {/*
      {imgData.map((e)=>(
        <DesktopCard url={e.urls.regular}/>
      ))}
      */}
      <DesktopCard />
      </div>
    </div>
  )
}
export default Body;
