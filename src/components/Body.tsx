import axios from "axios";
import DesktopCard from "./DesktopCard";
import { useEffect,useState } from "react";

const baseurl =
  "https://api.unsplash.com/photos/?client_id=QiEe2pR0aGPwvYAkj8wOolp3LJOCggwxETxwuwb1rcg";

const Body = () =>{
  const [imageData,setImageData] = useState([]);
  async function getImages(){
    try{
      axios.get(baseurl).then((res)=>{
        setImageData(res.data);
      }).catch(e=>{
        console.log(e);
      });
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    getImages();
  },[]);
  type imagedatatype = {
    id:string,
    url:string
  }
  return (
    <div>
      <div>
        {imageData.map((e:imagedatatype)=>(
          <DesktopCard value={e.id} url={e.url.regular}/>
        ))}
      </div>
    </div>
  )
}
export default Body;
