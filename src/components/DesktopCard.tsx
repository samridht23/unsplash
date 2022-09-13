import AddCollection from "../assets/addCollection.svg";
import DownloadButton from "../assets/download.svg";

const DesktopCard = () => {
  return (
    <div className="flex relative w-full m-2">
      <img src="https://images.unsplash.com/photo-1662618114031-ce30d2c8559c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
      <div className="flex flex-col absolute transition ease-in-out items-center opacity-0 hover:opacity-80 justify-between w-full h-full bg-gradient-to-t from-gray-800 text-white">
        <div className="flex w-full justify-end px-6 py-5">
          <a
            rel="nofollow"
            href="https://unsplash.com/photos/yXaFKoJCPT4/download?ixid=MnwxMjA3fDB8MXxhbGx8N3x8fHx8fDJ8fDE2NjI3NjEzNjQ&force=false"
            download
            target="_blank"
            title="Download Photo"
          >
            <div className="bg-gray-50 rounded-sm drop-shadow-md py-1 px-2">
              <img className="w-5" src={AddCollection} alt="AddCollection" />
            </div>
          </a>
        </div>
        <div className="flex w-full justify-between items-center px-6 py-5 ">
          <div className="flex items-center">
            <a href="#">
              <img
                className="w-8 rounded-full"
                src="https://images.unsplash.com/profile-1642845764499-28c681097adeimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt="profile_image"
              />
            </a>
            <div>
              <div className="text-sm ml-2">
                <a href="">Tim Mossholder</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-sm drop-shadow-md py-1 px-2">
            <a href="#">
              <img className="w-5" src={DownloadButton} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesktopCard;
