const DesktopCard = (props) =>{
  return(
    <div className="flex relative w-1/2">
     <img src="https://images.unsplash.com/photo-1662618114031-ce30d2c8559c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
     <div className="flex absolute transition ease-in-out items-center justify-center w-full h-full bg-gradient-to-t from-gray-800 opacity-0 hover:opacity-50 text-white">hi</div>
    </div>
  )
}
export default DesktopCard;
