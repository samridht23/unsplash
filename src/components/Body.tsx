import axios from "axios";
import DesktopCard from "./DesktopCard";
import { useEffect, useState } from "react";

const baseurl =
  "https://api.unsplash.com/photos/?client_id=QiEe2pR0aGPwvYAkj8wOolp3LJOCggwxETxwuwb1rcg";

const Body = () => {
  const [imgData, setImgData] = useState([]);
  async function getImages() {
    try {
      axios
        .get(baseurl)
        .then((res) => {
          setImgData(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="lg:mx-40 xl:mx-56 2xl:mx-72 my-4">
      <div className="md:columns-2 lg:columns-3 gap-2">
        {/*
      {imgData.map((e)=>(
        <DesktopCard url={e.urls.regular}/>
      ))}
      */}
        <DesktopCard />
        <DesktopCard />
        <DesktopCard />
        <DesktopCard />
        <DesktopCard />
        <DesktopCard />
      </div>
    </div>
  );
};
export default Body;
